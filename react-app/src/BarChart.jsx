import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const requestOptions = {
    method: 'GET'
   };

const officeURI = 'http://localhost:8080/api/sales/dept/year?id=1&year=2021';
const microsoftURI = 'http://localhost:8080/api/sales/dept/year?id=2&year=2021';
const computerURI = 'http://localhost:8080/api/sales/dept/year?id=3&year=2021';
const itServicesURI = 'http://localhost:8080/api/sales/dept/year?id=4&year=2021';
const financialURI = 'http://localhost:8080/api/sales/dept/year?id=5&year=2021';

const BarChart = () => {

    const [officeTotal, setOfficeTotal] = useState([]);
    const [microsoftTotal, setMicrosoftTotal] = useState([]);
    const [computerTotal, setComputerTotal] = useState([]);
    const [itServicesTotal, setItServicesTotal] = useState([]);
    const [financialTotal, setFinancialTotal] = useState([]);

    useEffect( () => {
        fetch(officeURI, requestOptions)
        .then(result => {
            return result.json()
        })
        .then(found => {
            let currentMonth = 0;
            const officeTotalArray = [0,0,0,0,0,0,0,0,0,0,0,0]
            for(let i of found) {
                if(i.saleDate[1] === currentMonth +1) {
                    officeTotalArray[currentMonth] = officeTotalArray[currentMonth] + i.total;
                } else {
                    currentMonth++;
                    officeTotalArray[currentMonth] = officeTotalArray[currentMonth] + i.total;
                }
            }
            setOfficeTotal(officeTotalArray);
        })

        fetch(microsoftURI, requestOptions)
        .then(result => {
            return result.json()
        })
        .then(found => {
            let currentMonth = 0;
            const microsoftTotalArray = [0,0,0,0,0,0,0,0,0,0,0,0]
            for(let i of found) {
                if(i.saleDate[1] === currentMonth + 1) {
                    microsoftTotalArray[currentMonth] = microsoftTotalArray[currentMonth] + i.total;
                } else {
                    currentMonth++;
                    microsoftTotalArray[currentMonth] = microsoftTotalArray[currentMonth] + i.total;
                }
            }
            setMicrosoftTotal(microsoftTotalArray);
        })

        fetch(computerURI, requestOptions)
        .then(result => {
            return result.json()
        })
        .then(found => {
            let currentMonth = 0;
            const computerTotalArray = [0,0,0,0,0,0,0,0,0,0,0,0]
            for(let i of found) {
                if(i.saleDate[1] === currentMonth +1) {
                    computerTotalArray[currentMonth] = computerTotalArray[currentMonth] + i.total;
                } else {
                    currentMonth++;
                    computerTotalArray[currentMonth] = computerTotalArray[currentMonth] + i.total;
                }
            }
            setComputerTotal(computerTotalArray);
        })

        fetch(itServicesURI, requestOptions)
        .then(result => {
            return result.json()
        })
        .then(found => {
            let currentMonth = 0;
            const itServicesTotalArray = [0,0,0,0,0,0,0,0,0,0,0,0]
            for(let i of found) {
                if(i.saleDate[1] === currentMonth +1) {
                    itServicesTotalArray[currentMonth] = itServicesTotalArray[currentMonth] + i.total;
                } else {
                    currentMonth++;
                    itServicesTotalArray[currentMonth] = itServicesTotalArray[currentMonth] + i.total;
                }
            }
            setItServicesTotal(itServicesTotalArray);
        })

        fetch(financialURI, requestOptions)
        .then(result => {
            return result.json()
        })
        .then(found => {
            let currentMonth = 0;
            const financialTotalArray = [0,0,0,0,0,0,0,0,0,0,0,0]
            for(let i of found) {
                if(i.saleDate[1] === currentMonth +1) {
                    financialTotalArray[currentMonth] = financialTotalArray[currentMonth] + i.total;
                } else {
                    currentMonth++;
                    financialTotalArray[currentMonth] = financialTotalArray[currentMonth] + i.total;
                }
            }
            setFinancialTotal(financialTotalArray);
        })
        .catch(error => console.log(error));
    }, [])

    const options =  {   chart: {
    type: 'column'
    },
    title: {
        text: 'Sales by Department'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Sales ($)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0">$<b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Office Supplies',
        data: officeTotal

    }, {
        name: 'Microsoft Software',
        data: microsoftTotal

    }, {
        name: 'Computer Parts',
        data: computerTotal

    }, {
        name: 'IT Services',
        data: itServicesTotal

    }, {
        name: 'Financial Services',
        data: financialTotal
    }]
    };


    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        );
    }

export default BarChart;