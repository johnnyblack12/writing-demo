const xValues = [2015,2016,2017,2018,2019,2020,2021];

new Chart('chart1', {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
            label: 'Ngannou',
            data: [0.087,0.387,1.567,1.934,2.539,2.734,4.587],
            borderColor:'red',
            fill: false,
        }, {
            label: 'Gane',
            data: [0,0,0,0,0.239,0.426,1.248],
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
            data: [0.087,0.387,1.567,1.934,2.539,2.734,4.587],
            borderColor:'red',
            fill: false,
        }, {
            label: 'Gane',
            data: [0.239,0.426,1.248,1.516,1.783,2.051,2.318],
            borderColor:'blue',
            fill: false,
        }]
    },
    options: {
        legend: {display: true}
    }
});