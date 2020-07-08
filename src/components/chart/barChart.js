import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// BarChart
var BarChart = props => {
  const barChartOption = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    series: props.legends,
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          yAxis: {
            labels: {
              align: 'left',
              x: 0,
              y: -5
            },
            title: {
              text: null
            }
          },
          subtitle: {
            text: null
          },
          credits: {
            enabled: false
          }
        }
      }]
    }
  };
  return (
    <HighchartsReact highcharts={Highcharts} options={barChartOption} />
  );
}

export default BarChart;
