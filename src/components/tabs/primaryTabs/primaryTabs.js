import React from 'react';
import Nav from 'react-bootstrap/Nav';
import SubPrimaryTabs from '../../tabs/primaryTabs/subPrimaryTabs';

var PrimaryTabs = () => {
    return (
        <Nav className="mr-auto ml-md-4 ml-0 navbar-nav">
            {/* <SubPrimaryTabs tabName="Inflencer Performance"></SubPrimaryTabs> */}
            <SubPrimaryTabs tabName="Update Profile"></SubPrimaryTabs>
            <SubPrimaryTabs tabName="Reports"></SubPrimaryTabs>
            {/* <SubPrimaryTabs tabName="Social Listening"></SubPrimaryTabs> */}
            {/* <SubPrimaryTabs tabName="Paid Media Performance"></SubPrimaryTabs> */}
        </Nav>
    )
}

export default PrimaryTabs;