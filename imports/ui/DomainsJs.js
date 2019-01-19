import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class DomainsJs extends Component {

    render() {
        const { domains } = this.props;
        return (
            <div className="">
                <h4>Domains</h4>

                    {
                        domains.map((domain) => (
                            <p key={domain._id}>{domain.domain}</p>
                        ))
                    }
            </div>
        )
    }
}

