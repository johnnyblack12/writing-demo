const xValues1 = [0,'Fight 1','Fight 2','Fight 3','Fight 4','Fight 5','Fight 6','Fight 7','Fight 8','Fight 9','Fight 10','Fight 11','Fight 12','Fight 13'];

new Chart('chart1', {
    type: 'line',
    data: {
        labels: xValues1,
        datasets: [{
            label: 'Ngannou',
            data: [0,0.660,1.256,2.103,2.940,4.282,6.950,6.101,5.708,7.678,8.565,10.518,12.013,15.543],
            borderColor:'red',
            fill: false,
        }, {
            label: 'Gane',
            data: [0,0.769,1.223,1.820,2.878,3.772,4.479,6.134],
            borderColor:'blue',
            fill: false,
        }]
    },
    options: {
        legend: {display: true}
    }
});