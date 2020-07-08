import React from 'react'

var PortletBody = props => {
    return (
        <div className="top-count-stat text-center">
            <h2 className="top-count-stat-title"> {props.heading}</h2>
            <div className="d-flex align-items-center justify-content-center top-stat-count">{props.count}</div>
        </div>
    )
}

export default PortletBody;
