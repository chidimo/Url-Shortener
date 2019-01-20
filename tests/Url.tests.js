import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import faker from 'faker';
import chai from 'chai';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';

import Url from '../imports/ui/Url';
import * as utilsAPI from '../imports/api/utilsAPI';

Enzyme.configure({ adapter: new Adapter() });


describe('<Url />', () => {
    it('should render', () => {
        global.window = { location : { host : 'https://basic-url-shortener.herokuapp.com' } };
        const u = faker.internet.url()
        const url = Factory.build('url', {
            url: u, domain: utilsAPI.getDomain(u)
        });
        const item = shallow(<Url url={url} />);
        chai.assert(item.hasClass('url-item'))
    });
});
