import React, { Component } from 'react';


export default class Url extends Component {
    render() {

        const { url } = this.props
        return (
            <li><a href={url.url} target="_blank">{url.short_url}</a></li>
        )
    }
}
