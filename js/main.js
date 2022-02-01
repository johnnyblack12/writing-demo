const xValues1 = [0,'Fight 1','Fight 2','Fight 3','Fight 4','Fight 5','Fight 6','Fight 7','Fight 8','Fight 9','Fight 10','Fight 11','Fight 12','Fight 13'];
const xValues2 = [0,'Fight 1','Fight 2','Fight 3','Fight 4','Fight 5'];

new Chart('chart1', {
    type: 'line',
    data: {
        labels: xValues1,
        datasets: [{
            label: 'Ngannou',
            data: [0,1.474,2.808,4.703,6.133,8.743,13.459,12.859,11.193,13.656,14.122,15.586,16.434,19.965],
            borderColor:'red',
            fill: false,
        }, {
            label: 'Gane',
            data: [0,1.72,2.736,4.069,6.873,8.473,9.051,10.961],
            borderColor:'blue',
            fill: false,
        }]
    },
    options: {
        legend: {display: true}
    }
});

new Chart('chart2', {
    type: 'line',
    data: {
        labels: xValues2,
        datasets: [{
            label: 'Ngannou',
            data: [0,2.4625,2.929,4.394,5.241,8.772],
            borderColor:'red',
            fill: false,
        }, {
            label: 'Gane',
            data: [0,1.333,4.138,5.738,6.315,8.223],
            borderColor:'blue',
            fill: false,
        }]
    },
    options: {
        legend: {display: true}
    }
});