import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import * as utilsAPI from './utilsAPI';

export const Urls = new Mongo.Collection('urls');
export const Domains = new Mongo.Collection('domains')



if (Meteor.isServer) {
    Meteor.publish('urls', function publishUrls(){
        return Urls.find({}, {sort: {createdAt: -1}});
    });
    Meteor.publish('domains', function publishDomains(){
        return Domains.find({});
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

    'domains.insert'(url) {
        const domain = utilsAPI.getDomain(url)
        Domains.upsert({domain:domain}, {domain:domain})
    }
});
