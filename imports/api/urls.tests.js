/* eslint-env mocha */
 
import { Meteor } from 'meteor/meteor';

import { assert } from 'chai';
 
import { Urls } from './urls.js';
import * as utilsAPI from './utilsAPI';
 
if (Meteor.isServer) {
    describe('Urls', () => {
        describe('methods', () => {
            let url = "https://forums.meteor.com/"
    
            beforeEach(() => {
            Urls.remove({});
            Urls.insert({
                url: url, 
                domain: utilsAPI.getDomain(url),
                createdAt: new Date()
            });
            });
        
            it('can add urls', () => {
                assert.equal(Urls.find().count(), 1)
            })
        });
    });
}
