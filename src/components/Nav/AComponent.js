import React from 'react'

export default ({href, download = false, blank = false, text}) => {
    const aProp = {
        href,
        download,
    }

    if(blank) {
        aProp['rel'] = "noopener noreferrer"
        aProp['target'] = "_blank"
    }

    return <a style={{fontWeight: "bolder"}} {...aProp}>{text}</a>
}