import React from 'react';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';


var SubPrimaryTabs = (props) => {
    var tabsName = props.tabName,
        tabsUrl = tabsName.replace(/\s+/g, '-').toLowerCase();
    return <Nav.Link href={tabsUrl}>{tabsName}</Nav.Link>
}

SubPrimaryTabs.prototype = {
    tabsName: PropTypes.string
}

export default SubPrimaryTabs;
