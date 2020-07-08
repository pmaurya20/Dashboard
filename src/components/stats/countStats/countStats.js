import React from 'react';
import Portlet from '../../HOC/portlet/portlet';
import PortletBody from '../countStats/portletBody';
import '../stat.css';

// Count Stats
var CountStats = props => {
    debugger
    return (
        <div className="row top-count-stats m-0">
            {props.campaignCount.map(campaign =>
                <div className="col-md-4 pl-0"><Portlet>{<PortletBody heading={campaign.heading} count={campaign.campaignCount} key={campaign.id}/>}</Portlet></div>
            )}
        </div>
    )
}

export default CountStats;