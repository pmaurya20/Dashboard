import React from 'react';
import PropTypes from 'prop-types';
import Portlet from '../../../HOC/portlet/portlet';
import Slider from '../../../countSlider/countSlider';
import BarChart from '../../../chart/barChart';

// Social Post
const BarChartOption = [
  {
    name: 'Tokyo',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    color: '#5686C3'

  }, {
    name: 'New York',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
    color: '#00AB9B'

  }, {
    name: 'London',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
    color: '#F2A057'

  }, {
    name: 'Berlin',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
    color: '#F26B8F'
  }
];

var TabsContent = props => {
  return (
    <div id={props.tabContentName}>
      {/* Stats */}
      <div className="total-stats clearfix">
        <div className="total-stats__item total-stats__item1">
          Total 12345
        </div>

        {/* Slider */}
        <Slider></Slider>
      </div>

      <Portlet PortletTitle="Social Posts Trend">
        {/* Bar Chart */}
        {<BarChart legends={BarChartOption} />}
      </Portlet>
    </div>
  )
}

TabsContent.prototype = {
  tabsName: PropTypes.string
}

export default TabsContent;