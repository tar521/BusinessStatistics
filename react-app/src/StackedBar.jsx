import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const requestOptions = {
    method: 'GET'
   };

const URI = 'http://localhost:8080/api/sales/month?month=7&year=2022'
const departments = ['Office Supplies', 'Microsoft Software', 'Computer Parts', 'IT Services', 'Financial Services'];

const StackedBar = () => {
    
    const [openTotal, setOpenTotal] = useState([]);
    const [closedTotal, setClosedTotal] = useState([]);

    useEffect( () => {
        fetch(URI, requestOptions)
        .then(result => {
            return result.json()
        })
        .then(found => {
            let currentDept = 0;
            const openTotalArray = [0,0,0,0,0];
            const closedTotalArray = [0,0,0,0,0];
            for(let i of found) {
                if(i.dept.id === currentDept + 1) {
                    if(i.status === true) {
                        closedTotalArray[currentDept] = closedTotalArray[currentDept] + i.total;
                    } else {
                        openTotalArray[currentDept] = openTotalArray[currentDept] + i.total;
                    }
                } else {
                    currentDept++;
                    if(i.status === true) {
                        closedTotalArray[currentDept] = closedTotalArray[currentDept] + i.total;
                    } else {
                        openTotalArray[currentDept] = openTotalArray[currentDept] + i.total;
                    }
                }
            }
            setOpenTotal(openTotalArray);
            setClosedTotal(closedTotalArray);
        })
        .catch(error => console.log(error));
    }, [])
    
    const options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Open/Closed This Month'
        },
        xAxis: {
            categories: departments
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Sales'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Open',
            color: 'red',
            data: openTotal
        }, {
            name: 'Closed',
            data: closedTotal
        }]
    };


    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        );
    }

export default StackedBar;