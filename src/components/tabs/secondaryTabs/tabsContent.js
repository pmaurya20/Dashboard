import React from 'react';
import PropTypes from 'prop-types';
import SocialPost from './reportsModalTabContent/socialPost';
import SocialPerformance from './reportsModalTabContent/socialPerformance';
import InfluencerPerformance from './reportsModalTabContent/influencerPerformance';
import ReachedAudience from './reportsModalTabContent/reachedAudience';
import PaidMedia from './reportsModalTabContent/paidMedia';

// Secondart tabs Content
var TabsContent = props => {
    return (
        <div>
            {
                (props.tabContentName === "social-post") ? <SocialPost></SocialPost>
                    : (props.tabContentName === "social-performance") ? <SocialPerformance></SocialPerformance>
                        : (props.tabContentName === "influencer-performance") ? <InfluencerPerformance></InfluencerPerformance>
                            : (props.tabContentName === "reached-audience") ? <ReachedAudience></ReachedAudience>
                                : (props.tabContentName === "paid-media") ? <PaidMedia></PaidMedia>
                                    : null
            }
        </div>
    )
}

TabsContent.prototype = {
    tabsName: PropTypes.string
}

export default TabsContent;