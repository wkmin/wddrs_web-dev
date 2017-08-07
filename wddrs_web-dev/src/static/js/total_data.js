$(function(){
        var myChart = echarts.init(document.getElementById('pic'));

        var option = {
                title: {
                        text: 'ECharts 入门示例'
                },
        tooltip: {},
        legend: {
                data:['销量']
        },
        xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
                name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
        }]
        };
        option = {
        title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
        },
        tooltip: {
                trigger: 'axis'
        },
        legend: {
                data:['最高气温','最低气温']
        },
        toolbox: {
                show: true,
                feature: {
                        dataZoom: {
                                yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                }
        },
        xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
                type: 'value',
                axisLabel: {
                        formatter: '{value} °C'
                }
        },
        series: [
        {
                name:'最高气温',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                        data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                        ]
                },
                markLine: {
                        data: [
                        {type: 'average', name: '平均值'}
                        ]
                }
        },
        {
                name:'最低气温',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                        data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                },
                markLine: {
                        data: [
                        {type: 'average', name: '平均值'},
                        [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                        }, {
                                symbol: 'circle',
                                label: {
                                        normal: {
                                                position: 'start',
                                                formatter: '最大值'
                                        }
                                },
                                type: 'max',
                                name: '最高点'
                        }]
                        ]
                }
        }
        ]};
        myChart.setOption(option);
});
function change_span_status(which){
        $("[id=span_chose]").removeClass("span_class_active");
        $("[id=span_chose]").addClass("span_class");
        $(which).addClass("span_class_active"); 
}
