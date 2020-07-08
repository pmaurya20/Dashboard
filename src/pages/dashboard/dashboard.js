import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './dashboard.css';
import Axios from '../../axios/axios1';
import Portlet from '../../components/HOC/portlet/portlet';
import BarChart from '../../components/chart/barChart';
import PieChart from '../../components/chart/pieChart';
import SplineChart from '../../components/chart/splineChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stats from '../../components/stats/graphStats/graphStats';

const PieChartOption = [{
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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Axios.get('/').then((response) => {
      var comp = this;
      const datac = response.data;
      comp.setState({
        data: datac
      })
    }).catch(response => {
      var comp = this;
      const datac = response.data;
      comp.setState({
        data: datac
      });
    });
  }

  render() {

    return (
      <div className="content">
        <Container className="w-75">
          <Portlet PortletTitle="Social Posts Trend">
            {/* Bar Chart */}
            {<BarChart legends={BarChartOption} />}
          </Portlet>

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

          <Portlet PortletTitle="Engagement Distribution">
            <PieChart subTitle="Total <br> 4.3K" lagends={PieChartOption}></PieChart>
          </Portlet>
        </Container>
      </div>
    )
  }
}

export default Dashboard;