import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { Urls, Domains } from '../api/collections';

import Url from './Url';
import Statistics from './Statistics';
import DomainsJs from './DomainsJs';
import * as utilsAPI from '../api/utilsAPI';


class App extends Component {

    state = {urls: [], number_of_urls: 0, domains: []}

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Next ", nextProps.urls)
        console.log("prev ", prevState)
        return {
            urls: nextProps.urls,
            number_of_urls: nextProps.number_of_urls,
            domains: nextProps.domains
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = e.target.originalUrl.value.trim()
        Meteor.call('urls.insert', url)
        ReactDOM.findDOMNode(this.refs.urlInput).value = ''; // clear form
        Meteor.call('domains.insert', url)
    }

    render() {
        const {urls, number_of_urls, domains} = this.state

        return (
            <div className="container app">
                <header>
                    <h1>Url Shortener</h1>
                    <p>A basic url shortening service<br/>
                        Backend: <code>Meteor</code><br/>
                        Frontend: <code>React</code>
                    </p>
                </header>

                <div className="statistics">
                    <Statistics number_of_urls={number_of_urls} number_domains={domains.length}/>
                </div>

                <form 
                    onSubmit={this.handleSubmit}>
                    <input 
                        className="form-control" 
                        type="url" name="originalUrl" 
                        placeholder="Enter url to shorten."
                        ref="urlInput"
                    />
                </form>
                <div className="row">
    
                    <div className="col-sm-8">
                        <h4>Urls</h4>

                        {
                            urls.map((url) => (
                                <Url key={url._id} url={url}/>
                            ))
                        }
                    </div>

                    <div className="col-sm-4">
                        <DomainsJs domains={domains}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter(
    withTracker(() => {
        Meteor.subscribe('urls');
        Meteor.subscribe('domains');
        const urls_data = Urls.find()
        return {
            urls: urls_data.fetch(),
            number_of_urls: urls_data.count(),
            domains: Domains.find().fetch()
        }
    })(App)
);

// db.urls.group({ key: {domain: 1}, initial: {sum:0}, reduce: function(url, prev) { prev.sum += 1; } })

// return a list