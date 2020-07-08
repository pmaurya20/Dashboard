import React from 'react';
import PropTypes from 'prop-types';
import Portlet from '../../../HOC/portlet/portlet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stats from '../../../stats/graphStats/graphStats';
import PieChart from '../../../chart/pieChart';
import SplineChart from '../../../chart/splineChart';

// Social Post Performance
const PieChartOption= [{
  y: 8,
  name: "Likes",
  color: "#5686C3"
}, {
  y: 4,
  name: "Comments",
  color: "#00AB9B"
}, {
  y: 2,
  name: "Reports",
  color: "#F2A057"
}];

const SplineChartOption = [1, 2, 1, 4, 3, 6];

var SocialPerformance = () => {
  return (
    <div>
      <Portlet PortletTitle="Overall Impressions and Engagement Trend">
        {/* Portlet Body Starts here*/}
        <Row>
          <Col lg={2} className="p-0 stats-border-right">
            <Stats heading="Total Impressions" count="586.8K"></Stats>
            <Stats heading="Impressions per Post" count="83.8K"></Stats>
          </Col>
          <Col lg={10}>
          <SplineChart legends={SplineChartOption} />
          </Col>
        </Row>
        {/* Portlet Body Ends here*/}
      </Portlet>

      {/* Piechart */}
      <Portlet PortletTitle="Engagement Distribution">
         <PieChart subTitle="Total <br> 4.3K" lagends={PieChartOption}></PieChart>
      </Portlet>
    </div>
  )
}

SocialPerformance.prototype = {
  tabsName: PropTypes.string
}

export default SocialPerformance;