import React from 'react'
import './contentHeaderStyle.css'

function ContentHeader(props) {
    return (
        <div>
            <h5>{props.section}</h5>
        </div>
    )
}

export default ContentHeader