import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const requestOptions = {
    method: 'GET'
}

const id = 2;
const URI = 'http://localhost:8080/api/sales/month?month=7&year=2022';


const PieChart = () => {
    
    const [openSales, setOpenSales] = useState([]);
    const [closedSales, setClosedSales] = useState([]);

    useEffect( () => {
        fetch(URI, requestOptions)
        .then(result => {
            return result.json();
        })
        .then(found => {
            let openSalesTotal = 0;
            let closedSalesTotal = 0;
            for(let i of found) {
                if(i.user.id === id) {
                    if(i.status === true) {
                        closedSalesTotal = closedSalesTotal + i.total;
                    } else {
                        openSalesTotal = openSalesTotal + i.total;
                    }
                } else {
                    continue
                }
            }
            setClosedSales(closedSalesTotal);
            setOpenSales(openSalesTotal);
        })
        .catch(error => console.log(error));
    })
    
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true,
            type: 'pie'
        },
        title: {
            text: 'Your Open/Closed Sales This Month'
        },
        tooltip: {
            enabled: true
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Sales',
            colorByPoint: true,
            data: [{
                name: 'Closed Sales',
                y: closedSales,
                sliced: true,
                selected: true
            }, {
                name: 'Open Sales',
                color: 'red',
                y: openSales
            }]
        }]
    };


    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        );
    }

export default PieChart;