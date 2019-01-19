import React, { Component } from 'react';


class Statistics extends Component {

    render() {
        const { Statistics } = this.props
        return (
            <React.Fragment>
                <p>Total urls: {this.props.number_of_urls}</p>
                <p>Total domains: {this.props.number_domains}</p>
            </React.Fragment>
        )
    }
}

export default Statistics
