const xValues = [0,'Fight 1','Fight 2','Fight 3','Fight 4','Fight 5','Fight 6','Fight 7','Fight 8','Fight 9','Fight 10','Fight 11','Fight 12','Fight 13'];

new Chart('chart1', {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
            label: 'Ngannou',
            data: [0,1.474,2.808,4.703,6.133,8.743,12.516,11.916,10.249,12.712,13.178,14.643,15.491,19.021],
            borderColor:'red',
            fill: false,
        }, {
            label: 'Gane',
            data: [0,1.72,2.736,4.069,7.140,8.473,9.051,10.961],
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
        labels: xValues,
        datasets: [{
            label: 'Ngannou',
            data: [0,1.474,2.808,4.703,6.133,8.743,12.516,11.916,10.249,12.712,13.178,14.643,15.491,19.021],
            borderColor:'red',
            fill: false,
        }, {
            label: 'Gane',
            data: [0,1.72,2.736,4.069,6.873,8.473,9.051,10.961,12.527,14.093,15.659,17.225,18.79,20.356],
            borderColor:'blue',
            fill: false,
        }]
    },
    options: {
        legend: {display: true}
    }
});