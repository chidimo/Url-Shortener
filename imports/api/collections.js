import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Urls = new Mongo.Collection('urls');


if (Meteor.isServer) {
    Meteor.publish('urls', function publishUrls(){
        return Urls.find({});
    });
}

Meteor.methods({
    'urls.insert'(url) {
        check(url, String);

        if (Urls.findOne({url: url})) {
            alert('This url already exists')
            throw new Meteor.Error('Url already exists.')
        }

        Urls.insert({url: url, createdAt: new Date()});

        const u = Urls.findOne({url: url})
        Urls.update({url: url}, {$set: {short_url: u._id}});
    },
});
