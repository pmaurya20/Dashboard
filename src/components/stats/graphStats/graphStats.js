import React from 'react';
import '../stat.css';
// Graph Stats
var graphStats = props => {
    return (
        <div className="stats">
            <h3 className="statsTitle">{props.heading}</h3>
            <p className="statsCount mb-0">{props.count}</p>
        </div>
    )
}

export default graphStats;