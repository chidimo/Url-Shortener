import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { Urls } from '../api/collections';

import Url from './Url';


class App extends Component {

    state = {urls: []}

    handleSubmit = (e) => {
        e.preventDefault();
        const url = e.target.originalUrl.value.trim()
        Meteor.call('urls.insert', url)
        ReactDOM.findDOMNode(this.refs.urlInput).value = ''; // clear form
    }

    render() {

        const {urls} = this.props

        return (
            <div className="container app">
                <header>
                    <h1>Url Shortener</h1>
                    <p>A basic url shortening service<br/>
                        Backend: <code>Meteor</code><br/>
                        Frontend: <code>React</code>
                    </p>
                </header>
                <form 
                    onSubmit={this.handleSubmit}>
                    <input 
                        className="form-control" 
                        type="url" name="originalUrl" 
                        placeholder="Enter url to shorten."
                        ref="urlInput"
                    />
                </form>

                <ul className="">
                    {
                        urls.map((url) => (
                            <Url key={url._id} url={url}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default withRouter(
    withTracker(() => {
        Meteor.subscribe('urls');
        return {urls: Urls.find({}, {sort: {createdAt: -1}}).fetch()}
    })(App)
);
