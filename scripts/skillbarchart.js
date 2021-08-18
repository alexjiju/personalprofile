
var SkillBarChart = new function(){
    that = this;
    
    this.Initialize=function(){
    
      var data = {
        labels: ["ASP.Net MVC4", "C#", "Entity Framework 5", "HP Fortify Code Analysis", "SQL Server", "MySQL", "T-SQL",
        "Javascript","Jquery","ExtJs","Bootstrap","Angular 10",".Net Core","Source Control (GIT)","Source Control (TFS)","Source Control (Azure DevOps)","HTML & CSS","Webworks2.0 for Blackberry","Android 4+","Attachmate Reflection (Mainframe Emulator)","PHP & Wordpress"],
        datasets: [{
           data: [80, 80, 70, 70, 90, 60, 90,80,80,50,50,40,50,40,60,70,80,30,40,40,70],
           backgroundColor: ["#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0",
           "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0",
           "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0", "#2c7da0"], 
        }]
      };

      var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
        type: 'horizontalBar',
        data: data,
        options: {
           tooltips: {
             enabled: true
           },
           responsive: true,
           maintainAspectRatio:true,
           legend: {
              display: false,
              position: 'bottom',
              fullWidth: true,
              labels: {
                //boxWidth: 10,
                //padding: 50
              }
           },
           scales: {
              yAxes: [{
                //barPercentage: 0.90,
                gridLines: {
                  display: false,
                  drawTicks: false,
                  drawOnChartArea: false,
                  tickMarkLength: 5,
                },
                ticks: {
                  //fontColor: '#555759',
                  //fontFamily: 'Lato',
                  padding: 5,
                 }
                
                 
              }],
              xAxes: [{
                  gridLines: {
                    display: false,
                    drawTicks: false,
                    tickMarkLength: 5,
                    drawBorder: false
                  },
                ticks: {
                  display:false,
                  //padding: 5,
                  beginAtZero: true,
                  //fontColor: '#555759',
                  //fontFamily: 'Lato',
                  //fontSize: 11,
                  callback: function(label, index, labels) {
                   return (label/100)*100;
                  }
                    
                },
                 scaleLabel: {
                   display: false,
                   //padding: 10,
                   //fontFamily: 'Lato',
                   //fontColor: '#555759',
                   //fontSize: 16,
                   //fontStyle: 700,
                   labelString: 'Scale Label'
                 },
                
              }]
           }
        }
        
     });

    
    var screenWidth = Utilities.getDevice()[0];
    var screenHeight = Utilities.getDevice()[1]

    if(screenWidth >= 320 && screenWidth <= 480){
      horizontalBarChart.options.scales.yAxes[0].ticks.minor.fontSize = 3;
    }
    else if(screenWidth >= 481 && screenWidth <= 767){
      horizontalBarChart.options.scales.yAxes[0].ticks.minor.fontSize = 7;
    }
    else if(screenWidth >= 768 && screenWidth <= 1020){
      horizontalBarChart.options.scales.yAxes[0].ticks.minor.fontSize = 10;
    }
    else if(screenWidth >= 1024){
     horizontalBarChart.options.scales.yAxes[0].ticks.minor.fontSize = 14;
    }
      
    horizontalBarChart.update();
        

  }
}