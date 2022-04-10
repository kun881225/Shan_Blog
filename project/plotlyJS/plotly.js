let window_width = $(window).width();
let marginR = 40;


if (window_width < 600) {
    marginR = 0;
}else {
    marginR = 40;
}

let trace1 = {
    x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
    y: [219, 146, 112, 127, 124, 180, 236, 207, 236, 263, 350, 430, 474, 526, 488, 537, 500, 439],
    name: 'data1',
    marker: {color: 'rgb(55, 83, 109)'},
    type: 'bar'
};
  
let trace2 = {
    x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
    y: [16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270, 299, 340, 403, 549, 499],
    name: 'data2',
    marker: {color: 'rgb(26, 118, 255)'},
    type: 'bar'
};
  
let data1 = [trace1, trace2];

let layout1 = {
    title: 'plotly.js!',
    titlefont: {
        size: 25,
    },
    xaxis: {
        title: 'year',
        titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
        },
        tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
        }},
    yaxis: {
        title: 'number',
        titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
        },
        tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
        }
    },
    legend: {
        x: 0,
        y: 1.0,
        bgcolor: 'rgba(255, 255, 255, 0)',
        bordercolor: 'rgba(255, 255, 255, 0)'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,

    margin: {
        l: 50,
        r: marginR,
        pad: 1,
    }

};

let config = {
    responsive: true,
    displayModeBar: false,
}

Plotly.newPlot('plotly1_1', data1, layout1, config);

let price = {
    x: [107, 108, 109, 110, 111],
    y: [103.4, 106.2, 104.9, 107.2, 110.1],
    mode: 'lines+markers',
    name: '物價指標',
};

let data2 = [price]

let layout2 = {
    margin: {
        l: 50,
        r: marginR,
        pad: 1,
    },
}

Plotly.newPlot('plotly1_2', data2, layout2,{responsive: true});

let layout3 = {
    title: '107~110物價指標',
    titlefont: 28,
    xaxis: {
        title: '年(民國)',
    },
    yaxis: {
        title: '指標(以105 = 100 為基準)'
    },
    margin: {
        l: 50,
        r: marginR,
        pad: 1,
    },
}

Plotly.newPlot('plotly1_3', data2, layout3, {responsive: true});