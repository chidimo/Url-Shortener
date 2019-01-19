import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import * as utilsAPI from './utilsAPI';

export const Urls = new Mongo.Collection('urls');


if (Meteor.isServer) {
    Meteor.publish('urls', function publishUrls(){
        return Urls.find({}, {sort: {createdAt: -1}});
    });

}

Meteor.methods({
    'urls.insert'(url) {
        check(url, String);

        if (Urls.findOne({url: url})) {
            alert('This url already exists')
            throw new Meteor.Error('Url already exists.')
        }

        Urls.insert({
            url: url, 
            domain: utilsAPI.getDomain(url),
            createdAt: new Date()
        });

        const u = Urls.findOne({url: url})
        Urls.update({url: url}, {$set: {short_url: u._id}});
    },
});
