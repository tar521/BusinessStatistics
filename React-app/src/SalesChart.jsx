import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import accessibility from 'highcharts/modules/accessibility'
accessibility(Highcharts);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const empTotals = [1534, 2845, 1978, 2523, 3015, 1736, 1798, 2436, 3320, 2354, 1497, 2187];
const deptTotals = [8760, 11509, 13576, 18450, 10056, 17474, 14433, 16870, 12744, 9870, 13256, 12877];

const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Sales Totals'
    },
    xAxis: {
        type: 'date',
        categories: months
    },
    yAxis: {
        title: {
            text: 'Total $'
        }
    },
    series: [
      {
        name: 'Your Sales',
        color: 'blue',
        data: empTotals
      },
      {
        name: 'Department Sales',
        color: 'lightgreen',
        data: deptTotals
      }
    ]
  };

  const SalesChart = () => {
    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        );
    }

  export default SalesChart;