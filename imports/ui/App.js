import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { Urls } from '../api/urls';
import { Domains } from '../api/domains';

import Url from './Url';
import DomainsJs from './DomainsJs';


class App extends Component {

    state = {urls: [], number_of_urls: 0, domains: [], filteredUrls:[]}

    static getDerivedStateFromProps(props, prevState) {
        return {
            urls: props.urls,
            number_of_urls: props.number_of_urls,
            domains: props.domains
        }
    }

    filterByDomain = (domain) => {
        const filteredUrls = this.state.urls.filter((url) => (url.domain === domain))
        this.setState({filteredUrls: filteredUrls})
    };

    removeFilter = () => {
        this.setState({filteredUrls: []})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = e.target.inputURL.value.trim()
        Meteor.call('urls.insert', url)
        ReactDOM.findDOMNode(this.refs.urlInput).value = ''; // clear form
        Meteor.call('domains.insert', url)
    }

    handleRedirect = () =>{
        console.log(" Handling redirect ")
        const urlId = location.pathname.replace("/", "")
        if (urlId) {
            console.log("Redirect")
            const url_obj = Urls.findOne({_id: urlId})
            if (url_obj) {
                console.log(url_obj.url)
                window.location.replace(url_obj.url)
            }
        }
    }

    render() {
        this.handleRedirect();

        const {urls, number_of_urls, domains, filteredUrls} = this.state
        const msg1 = `Shortened ${number_of_urls} urls from ${domains.length} domains`
        
        return (
            <div className="container app">
                <header>
                    <h1>Url Shortener</h1>
                    <p>Shorten your URLs</p>
                </header>

                <div className="statistics">
                    {
                        filteredUrls.length === 0
                        ?
                        <p>{msg1}</p>
                        :
                        <p></p>
                    }
                </div>

                <form 
                    onSubmit={this.handleSubmit}>
                    <input 
                        className="form-control" 
                        type="url" name="inputURL" 
                        placeholder="Enter url to shorten."
                        ref="urlInput"
                    />
                </form>
                <div className="row">
    
                    <div className="col-sm-8">
                        <h4>Urls</h4>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => this.removeFilter()}
                        >
                            Show all
                        </button>

                        {
                            filteredUrls.length === 0
                            ?
                            urls.map((url) => (
                                <Url key={url._id} url={url}/>
                            ))
                            :
                            filteredUrls.map((url) => (
                                <Url key={url._id} url={url}/>
                            ))
                        }
                    </div>

                    <div className="col-sm-4">
                        <DomainsJs domains={domains} filterFunc={(domain) => this.filterByDomain(domain)}/>
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
