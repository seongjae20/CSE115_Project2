/*eslint-disable no-undef, no-undef-expression*/
function loadChart(){
    var request = new XMLHttpRequest();    
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            var bar = getbarinfo(this.response);
            Plotly.newPlot('bar', bar.data, bar.layout);
        }
    };
    request.open("GET", "/buffalo");
    request.send();
}

function bardata(obj){
    var a = Object.keys(obj);
    var b = Object.values(obj);
    var data = [{
        type: 'bar',
        x: a,
        y: b,
        marker: {
            color: 'rgb(142,124,195)'
        }
    }];
    return data;
}

function barlayout(){
    var layout = {
        title: 'The number of each types of crimes in buffalo',
        font:{
            family: 'Raleway, sans-serif'
        },
        showlegend: false,
        yaxis: {
        zeroline: false,
        gridwidth: 2
        },
        bargap :0.05
    };
    return layout;
}

function getbarinfo(str){
    var x = JSON.parse(str);
    var data = bardata(x);
    var layout = barlayout();
    var obj = {};
    obj["data"] = data;
    obj["layout"] = layout;
    return obj;
}
