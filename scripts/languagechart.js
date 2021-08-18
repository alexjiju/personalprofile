
var LanguageChart = new function(){
    that = this;
    
    this.Initialize=function(){
    
 var config = {
  type: 'line',
  data: {
    labels: ["Listen","Speak", "Read", "Write"],
    datasets: [{
      label: "Tamil",
      data:[1,1],
      fill: false
    }, {
      label: "Malayalam",
      data:[2,2,2,2],
      fill: false
    }, {
      label: "Hindi",
      data:[3,3,3,3],
      fill: false
    }, {
      label: "English",
      data:[4,4,4,4],
      //lineTension: -5,
      fill: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio:true,
    legend: {
      display:false,
      position: 'bottom',
    },
    layout:{
      padding:{
        right:6
        
      }
    },
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        display: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Value'
        },
        ticks: {
          min: 0,
          max: 4.3,
          stepSize: 1,
          suggestedMin: 0.5,
          suggestedMax: 5.5,
          callback: function(label, index, labels) {
            switch (label) {
              case 1:
                return 'Tamil';
              case 2:
                return 'Malayalam';
              case 3:
                return 'Hindi';
              case 4:
                return 'English';
              
            }
          }
        },
        gridLines: {
          display: false
        }
      }]
    }
  }
};




var ctx = document.getElementById("canvas").getContext("2d");
window.myLine = new Chart(ctx, config);
  
var screenWidth = Utilities.getDevice()[0];
var screenHeight = Utilities.getDevice()[1]

if(screenWidth >= 320 && screenWidth <= 480){
  window.myLine.options.scales.yAxes[0].ticks.minor.fontSize = 3;
  $.each(config.data.datasets, function(i, dataset) {
    var background = '#2c7da0';//randomColor(0.5);
    dataset.borderColor = background;
    dataset.borderWidth=1;
    dataset.backgroundColor = background;
    //dataset.pointBorderColor = background; 
    //dataset.pointBackgroundColor = '#BF391D';
    //dataset.pointBorderWidth = 1;
    dataset.pointRadius=1;
    
  });
}
else if(screenWidth >= 481 && screenWidth <= 767){
  window.myLine.options.scales.yAxes[0].ticks.minor.fontSize = 7;
  $.each(config.data.datasets, function(i, dataset) {
    var background = '#2c7da0';//randomColor(0.5);
    dataset.borderColor = background;
    dataset.borderWidth=2;
    dataset.backgroundColor = background;
    //dataset.pointBorderColor = background; 
    //dataset.pointBackgroundColor = '#BF391D';
    //dataset.pointBorderWidth = 1;
    dataset.pointRadius=2;
    
  });
}
else if(screenWidth >= 768 && screenWidth <= 1020){
  window.myLine.options.scales.yAxes[0].ticks.minor.fontSize = 10;
  $.each(config.data.datasets, function(i, dataset) {
    var background = '#2c7da0';//randomColor(0.5);
    dataset.borderColor = background;
    dataset.borderWidth=3;
    dataset.backgroundColor = background;
    //dataset.pointBorderColor = background; 
    //dataset.pointBackgroundColor = '#BF391D';
    //dataset.pointBorderWidth = 1;
    dataset.pointRadius=3;
    
  });
}
else if(screenWidth >= 1024){
  window.myLine.options.scales.yAxes[0].ticks.minor.fontSize = 14;
  $.each(config.data.datasets, function(i, dataset) {
    var background = '#2c7da0';//randomColor(0.5);
    dataset.borderColor = background;
    dataset.borderWidth=4;
    dataset.backgroundColor = background;
    //dataset.pointBorderColor = background; 
    //dataset.pointBackgroundColor = '#BF391D';
    //dataset.pointBorderWidth = 1;
    dataset.pointRadius=4;
    
  });
}
  
window.myLine.update();


    }
}