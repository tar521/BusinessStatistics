import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import accessibility from 'highcharts/modules/accessibility'
accessibility(Highcharts);


const URI = 'http://localhost:8080/api/sales/year/2021';

const SalesChart = (props) => {

  const requestOptions = {
    method: 'GET'
   };
  
  const id = 2;
  const deptId = 1;

  const [empTotals, setEmpTotals] = useState([]);
  const [deptTotals, setDeptTotals] = useState([]);

  useEffect( () => {
    fetch(URI, requestOptions)
    .then(result => {
      return result.json();
    })
    .then(found => {
      let currentMonth = 0;
      const empTotalsArray = [];
      const deptTotalsArray = [0,0,0,0,0,0,0,0,0,0,0,0];
      for(let i of found) {
        if(i.user.id === id) {
          empTotalsArray.push(i.total);
        }

        if(i.dept.id === deptId) {
          if(i.saleDate[1] === currentMonth + 1) {
            deptTotalsArray[currentMonth] = deptTotalsArray[currentMonth] + i.total;
          } else {
            currentMonth ++;
            deptTotalsArray[currentMonth] = deptTotalsArray[currentMonth] + i.total;
          }  
        } else {
          continue
        }
      }
      setEmpTotals(empTotalsArray);
      setDeptTotals(deptTotalsArray);
    })
    .catch(error => console.log(error));
  }, [])

  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const options = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Previous Year Sales'
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

  
    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        );
}

  export default SalesChart;