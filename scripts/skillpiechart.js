
var SkillPieChart = new function(){
    that = this;
    this.xValues = ["ASP.net MVC", "C#", ".Net Core", "JS Frameworks"];
    this.yValues = [44, 49, 15, 55];
    this.barColors = ["#61a5c2","#01497c","#2c7da0","#89c2d9"];

    this.Initialize=function(){
        var ctx = $("#skillpiecanvas").get(0).getContext("2d");

        var chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: SkillPieChart.xValues,
            datasets: [{
                label: SkillPieChart.xValues,
                backgroundColor: SkillPieChart.barColors,
                data: SkillPieChart.yValues
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend:{
            display: false,
                position:"bottom"
            },
            elements:{
            arc:{
                borderWidth:0
            }
        },
        legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="list-unstyled row">');
            for (var i = 0; i < SkillPieChart.xValues.length; i++) {
                text.push('<li class="list-item col-6 mb-1 piechartlegenditem"><div><span style="margin-right: 0.3vw; background-color:' + SkillPieChart.barColors[i] + '">&nbsp;&nbsp;&nbsp;</span>');
                if (SkillPieChart.xValues[i]) {
                    text.push('<span>' + SkillPieChart.xValues[i] + '</span>');
                }
                text.push('</div></li>');
            }
            text.push('</ul>');
            return text.join('');
        }
        }
        });
        
        $('#skillspielegend').prepend(chart.generateLegend());
        
        chart.data.datasets.forEach(((set) => {
            set.backgroundColor.forEach((bgColor) => {
                const _stroke = ctx.stroke;
                /*ctx.stroke = function () {
                    ctx.save();
                    ctx.shadowColor = "#c3c3c3";
                    ctx.shadowBlur = 1;
                    ctx.shadowOffsetX = 20;
                    ctx.shadowOffsetY = 20;
                    _stroke.apply(this, arguments);
                    ctx.restore();
                };*/
        
                const _fill = ctx.fill;
                ctx.fill = function () {
                    ctx.save();
                    ctx.shadowColor = "#c3c3c3";
                    ctx.shadowBlur = 7;
                    ctx.shadowOffsetX = -9;
                    ctx.shadowOffsetY = 3;
                    _fill.apply(this, arguments);
                    ctx.restore();
                };
            });
        }));
    }
}