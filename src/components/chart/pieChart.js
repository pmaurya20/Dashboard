import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// PieChart
var PieChart = props => {
    const pieChartOption = {
        chart: {
          color: 'var(--black)',
          renderTo: 'container',
          type: 'pie',
        },
        credits: {
          enabled: false
        },
        title: {
          text: "",
          style: {
            "color": "var(--black)"
          }
        },
        subtitle: {
          text:props.subTitle,
          floating: true,
          style: {
            fontSize: 18,
            color: "var(--black)"
          }
          
        },
        yAxis: {
          title: {
            text: 'Total percent market share'
          }
        },
        plotOptions: {
          pie: {
            shadow: false,
            borderColor: null
          }
        },
        tooltip: {
          formatter: function() {
            return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
          }
        },
        legend: {
       
          layout: 'vertical',
          verticalAlign: 'middle',
          symbolRadius: 0,
          symbolPadding: 10,
          itemMarginTop: 20,
          itemStyle: {
            "color": "var(--black)"
          }
        },
        series: [{
          data: props.lagends,
          size: '60%',
          innerSize: '70%',
          showInLegend: true,
          dataLabels: {
            enabled: false
          },
          marker: {
            radius: 12,
            symbol: 'circle'
          }
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chart: {
              type: 'pie',
              marginLeft: 0
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
              },
              xAxis: {
                align: 'center'
              },
              yAxis: {
                labels: {
                  align: 'left',                 
                },
                title: {
                  text: null
                }
              },
              subtitle: {
                text: null
              },
              series: [{
                size:'100%',
              }]
            }
          }]
        }
      };

    return (
        <HighchartsReact highcharts={Highcharts} options={pieChartOption} />
    );
}

export default PieChart;
