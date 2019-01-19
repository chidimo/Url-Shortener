import React, { Component } from 'react';

import * as utilsAPI from '../api/utilsAPI'

class Url extends Component {
    copyOriginalUrl = (url) => {
        utilsAPI.copyText(url)
    }

    render() {
        const { url } = this.props
        return (
            <p>
                <a href={url.url} target="_blank">{url.short_url}</a>
    
                <span onClick={() => this.copyOriginalUrl(url.url)}
                    className="glyphicon glyphicon-copy pull-right" aria-hidden="true">
                </span>
            </p>
        );
    };
}

export default Url
