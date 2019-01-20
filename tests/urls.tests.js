/* eslint-env mocha */
 
import { Meteor } from 'meteor/meteor';

import { assert } from 'chai';

import faker from 'faker';

import { Factory } from 'meteor/dburles:factory';
import { resetDatabase } from 'meteor/xolvio:cleaner';
 
import { Urls } from '../imports/api/urls.js';
import * as utilsAPI from '../imports/api/utilsAPI';

Factory.define('url', Urls, {
    url: () => faker.internet.url(),
    domain: () => utilsAPI.getDomain(faker.internet.url()),
    createdAt: () => new Date()
});


if (Meteor.isServer) {
    describe('Urls', () => {
        describe('methods', () => {
            let url = "https://meteor.com/"
    
            beforeEach(() => {
                resetDatabase();
                Factory.create('url')
            });
            it('can add urls', () => {
                assert.equal(Urls.find().count(), 1)
            })
        });
    });
}
