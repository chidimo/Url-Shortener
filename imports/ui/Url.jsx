import React, { Component } from 'react';

import * as utilsAPI from '../api/utilsAPI'

class Url extends Component {
    copyURL = (url) => {
        utilsAPI.copyText(url)
    }

    render() {
        const { url } = this.props
        return (
            <p className="url-item">
                <a href={`https://basic-url-shortener.herokuapp.com`}>
                    {`https://basic-url-shortener.herokuapp.com`}
                </a>
    
                <span onClick={() => this.copyURL(url.url)}
                    className="glyphicon glyphicon-copy pull-right" aria-hidden="true">
                </span>
            </p>
        );
    };
}

export default Url
