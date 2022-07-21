import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const requestOptions = {
    method: 'GET'
}

const id = 2;
const URI = 'http://localhost:8080/api/sales/month?month=7&year=2022';


const GoalGauge = () => {

    const [totalSales, setTotalSales] = useState([]);

    useEffect( () => {

        fetch(URI, requestOptions)
        .then(result => {
            return result.json();
        })
        .then(found => {
            let totalSales = 0;
            for(let i of found) {
                if(i.user.id === id & i.status === true) {
                    totalSales = totalSales + i.total;
                }
            }
            setTotalSales(totalSales);
        })
        .catch(error => console.log(error));
    }, [])

    var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: {
        text: 'Sales This Month',
        align: 'center'
    },

    subtitle: {
        text: 'GOAL: 32k',
        align: 'center'
    },

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 28000,
        stops: [
            [0.1, '#D60000'], // red
            [0.5, '#F0E501'], // yellow
            [0.9, '#08D102'] // green
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            title: 'Sales',
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },

    series: [{
        name: 'Sales',
        data: [totalSales],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">$ {y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">This Month</span>' +
                '</div>'
        },
        tooltip: {
            valuePrefix: '$'
        }
    }]
};


    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={gaugeOptions} />
        </div>
        );
    }

export default GoalGauge;
