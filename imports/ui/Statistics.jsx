import React, { Component } from 'react';


class Statistics extends Component {

    render() {
        const { Statistics } = this.props
        return (
            <React.Fragment>
                <p>Number of urls indexed {this.props.number_urls}</p>
                <p>Number of domains indexed {this.props.number_domains}</p>
            </React.Fragment>
        )
    }
}

export default Statistics
