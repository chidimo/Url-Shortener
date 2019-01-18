import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { Urls } from '../api/collections';


class App extends Component {

    state = {urls: []}

    handleSubmit = (e) => {
        e.preventDefault();
        const url = e.target.originalUrl.value.trim()
        console.log(url)
        Meteor.call('urls.insert', url)
    }
    render() {
        return (
            <div className="container app">
                <header>
                    <h1>Url Shortener</h1>
                    <form 
                        className="new-url"
                        onSubmit={this.handleSubmit}>
                        <input type="url" name="originalUrl" placeholder="Enter url to shorten."/>
                    </form>
                </header>
            </div>
        )
    }
};


export default withRouter(
    withTracker(() => {
        Meteor.subscribe('urls');
        console.log("With router")
        return {urls: Urls.find().fetch()}
    })(App)
);

