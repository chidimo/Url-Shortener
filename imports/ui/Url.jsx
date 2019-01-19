import React from 'react';

function Url(props) {
    const { url } = props
    return (
        <li><a href={url.url} target="_blank">{url.short_url}</a></li>
    )
}

export default Url
