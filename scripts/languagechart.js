
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
      fill: false,
      borderWidth: function(){
               return 1;
             }
    }, {
      label: "Malayalam",
      //data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      data:[2,2,2,2],
      fill: false,
      borderWidth: function(){
               return 1;
             }
    }, {
      label: "Hindi",
      //data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      data:[3,3,3,3],
      fill: false,
      borderWidth: function(){
               return 1;
             }
    }, {
      label: "English",
      //data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      data:[4,4,4,4],
      //lineTension: 5,
      fill: false,
      borderWidth: function(){
               return 1;
             }
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
        right:5
        
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
          max: 4,
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

$.each(config.data.datasets, function(i, dataset) {
  var background = '#2c7da0';//randomColor(0.5);
  dataset.borderColor = background;
  dataset.borderWidth=2;
  dataset.backgroundColor = background;
  dataset.pointBorderColor = background; 
  dataset.pointBackgroundColor = background;
  dataset.pointBorderWidth = 0;
  
});


var ctx = document.getElementById("canvas").getContext("2d");
window.myLine = new Chart(ctx, config);
  



    }
}