import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import App from '../imports/ui/App';
import '../imports/api/urls';
import '../imports/api/domains';


Meteor.startup(() => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('app')
    )
})
