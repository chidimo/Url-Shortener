import React, { Component } from 'react';


export default class DomainsJs extends Component {
    render() {
        const { domains, filterFunc } = this.props;
        return (
            <div className="">
                <h4>Domains</h4>
                <p>Click button to filter</p>

                    {
                        domains.map((domain) => (
                            <button
                                onClick={() => filterFunc(domain.domain)}
                                className="btn btn-primary btn-sm" 
                                key={domain._id}>{domain.domain}
                            </button>
                        ))
                    }
            </div>
        );
    };
};


