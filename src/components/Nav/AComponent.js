import React from 'react'

export default ({href, download = false, blank = false, text, className = false}) => {
    const aProp = {
        href,
        download,
    }

    if(blank) {
        aProp['rel'] = "noopener noreferrer"
        aProp['target'] = "_blank"
    }

    if(className !== false) {
        aProp['className'] = className
    } else {
        aProp['style'] = {fontWeight: "bolder"}
    }

    return <a {...aProp}>{text}</a>
}