import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

highchartsMore(Highcharts);
solidGauge(Highcharts);

var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: {
        text: 'Sales This Month',
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
        enabled: true
    },

    // the value axis
    yAxis: {
        min: 200,
        max: 3000,
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
        data: [2500],
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

const GoalGauge = () => {
    return (
        <div>
        <HighchartsReact highcharts={Highcharts} options={gaugeOptions} />
        </div>
        );
    }

export default GoalGauge;
