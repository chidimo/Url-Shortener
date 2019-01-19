import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import * as utilsAPI from './utilsAPI';

export const Domains = new Mongo.Collection('domains')


if (Meteor.isServer) {
    Meteor.publish('domains', function publishDomains(){
        return Domains.find({});
    });
}

Meteor.methods({

    'domains.insert'(url) {
        check(url, String);
        const domain = utilsAPI.getDomain(url)
        Domains.upsert({domain:domain}, {domain:domain})
    }
});
