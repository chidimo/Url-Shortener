import React, { Component } from 'react';


class Urls extends Component {

    state = {urls: []}

    handleSubmit = (e) => {
        e.preventDefault();
        const url = e.target.originalUrl.value.trim()
        console.log(url)
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

export default Urls
