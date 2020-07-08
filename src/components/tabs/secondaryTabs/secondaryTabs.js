import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContent from '../secondaryTabs/tabsContent';
import '../secondaryTabs/secondaryTabs.css';

var secondaryTabs = () => {
    return (
        <Tabs className="secondary-tabs">
            <Tab eventKey="social-post" title="Number of Posts on Social"><TabContent tabContentName="social-post" /></Tab>
            <Tab eventKey="social-performance" title="Post Performance on Social"><TabContent tabContentName="social-performance" /></Tab>
            <Tab eventKey="influencer-performance" title="Influencer Performance"><TabContent tabContentName="influencer-performance" /></Tab>
            <Tab eventKey="reached-audience" title="Audience We've Reached"><TabContent tabContentName="reached-audience" /></Tab>
            <Tab eventKey="paid-media" title="Paid Media Performance"><TabContent tabContentName="paid-media" /></Tab>
        </Tabs>
    )
}

export default secondaryTabs;