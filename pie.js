/*eslint-disable no-undef */
function loadPie(){ 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            var pieinfo = getpieinfo(this.response);
            Plotly.newPlot('pie', pieinfo.data, pieinfo.layout);
        }
    };
    xhttp.open("GET", "/nyc");
    xhttp.send();
}

function piedata(arr){
    var allLabels = ['Buffalo', 'NYC'];
    var allValues = [];
    var api1_obj = arr[0];
    var api2_obj = arr[1];
    var nameinfo = Object.keys(api2_obj);
    for (var i = 0; i < Object.keys(api2_obj).length; i++){
        var array = [];
        var a = Object.keys(api2_obj)[i];
        array.push(api1_obj[a]);
        array.push(api2_obj[a]);
        allValues.push(array);
    }
    var ultimateColors = ['rgb(255, 0, 0)', 'rgb(0, 0, 255)'];
    var data = [{
        values: allValues[0],
        labels: allLabels,
        type: 'pie',
        marker: {
            colors: ultimateColors
        },
        domain: {
            row: 0,
            column: 0
        },
        name : nameinfo[0],
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
        },{
        values: allValues[1],
        labels: allLabels,
        type: 'pie',
        marker: {
            colors: ultimateColors
        },
        domain: {
            row: 1,
            column: 0
        },
        name: nameinfo[1],
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
        },{
        values: allValues[2],
        labels: allLabels,
        type: 'pie',
        marker: {
            colors: ultimateColors
        },
        domain: {
            row: 0,
            column: 1
        },
        name: nameinfo[2],
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
        },{
        values: allValues[3],
        labels: allLabels,
        type: 'pie',
        marker: {
            colors: ultimateColors
        },
        domain: {
            row: 1,
            column: 1
        },
        name: nameinfo[3],
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
    }];
    return data;
}

function pielayout(){
    var layout = {
        title: "comparing buffalo and NYC",
        height: 1000,
        width: 1000,
        grid: {rows: 2, columns: 2}
    };
    return layout;
}

function getpieinfo(x){
    var y = JSON.parse(x);
    var data = piedata(y);
    var layout = pielayout();
    var obj = {};
    obj['data'] = data;
    obj['layout'] = layout;
    return obj;
}
