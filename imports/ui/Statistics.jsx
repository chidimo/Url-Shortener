import React, { Component } from 'react';


class Statistics extends Component {

    render() {
        const { Statistics } = this.props
        return (
            <p>Site stats: shortened {this.props.number_of_urls} urls from {this.props.number_domains} domains</p>
        )
    }
}

export default Statistics
