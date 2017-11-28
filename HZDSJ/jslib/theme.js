/*统计图主题*/
var theme = {
	//总体颜色
	color:["#FBB040","#27AAE1","#58595B","#BE1E2D","#7AB3FE","#FF7D14","#FFEF14","#3A3FFB","#FD8DC5","#22BDCF","#C23531","#ADFD8D","#D48265"],
	areacolor:["#626357","#27AAE1"],
	//饼图颜色
	pieColor : ["#7AB3FE","#FF7D14","#FFEF14","#3A3FFB","#FD8DC5","#22BDCF","#C23531","#ADFD8D","#D48265",
	"#58595B","#FFEF14","#2F4554"],
	stateColor:["#FF8166","#F7CC4A","#00CFFF","#2EE88E","#D23D42","#794CFA","#FF4CDF","#FBB040"],
	//坐标轴默认参数
	yAxis : [{
        type : 'value',
        axisLine: { // 坐标轴线
	      show: true, // 默认显示，属性show控制显示与否
	      lineStyle: { // 属性lineStyle控制线条样式
	        color: '#fff',
	        width: 7,
	        shadowColor: '#fff', //默认透明
	        shadowBlur: 10
	      }
	    },
        axisTick: { // 坐标轴小标记
	      length: 15, // 属性length控制线长
	      lineStyle: { // 属性lineStyle控制线条样式
	        color: 'auto',
	        shadowColor: '#fff', //默认透明
	        shadowBlur: 10
	      },
	      alignWithLabel: true//坐标轴刻度与文字对齐
	    },
	    splitLine:{
            lineStyle:{//设置分割线样式
                width:3
            }
        },
        axisLabel:{//设置坐标轴文字样式
        	color:'#fff',
        	fontSize:40
        }
	}],
	
	xAxis:[{
		boundaryGap : true,
		axisLine: { // 坐标轴线
	      show: true, // 默认显示，属性show控制显示与否
	      lineStyle: { // 属性lineStyle控制线条样式
	        color:'#fff',
	        width: 7,
	        shadowColor: '#fff', //默认透明
	        shadowBlur: 10
	      }
	    },
        axisTick: { // 坐标轴小标记
	      length: 15, // 属性length控制线长
	      lineStyle: { // 属性lineStyle控制线条样式
	        color: 'auto',
	        shadowColor: '#fff', //默认透明
	        shadowBlur: 10
	      },
	      alignWithLabel:true
	    },
        axisLabel:{
        	color:'#fff',
        	fontSize:40,
           
        }
	}],
	//网格
	grid:{
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    //图例(底部图例)
    legend:{
    	x : 'center',
        y : 'bottom',
        itemGap:55,
        itemWidth:50,
        itemHeight:50,
        textStyle:{
        	color:'#fff',
        	fontSize:50,
        	padding:[0,30]
        }
    },
    //顶部图例
    legendTop:{
    	x : 'center',
        y : 'top',
        itemGap:55,
        itemWidth:40,
        itemHeight:40,
        textStyle:{
        	color:'#fff',
        	fontSize:30,
        	padding:[0,10]
        }
    },
    //左侧图例
    legendLeft:{
    	x : 'left',
        y : 'center',
        left:'5%',
        orient:'vertical',
        itemGap:55,
        itemWidth:40,
        itemHeight:40,
        textStyle:{
        	color:'#fff',
        	fontSize:50,
        	padding:[0,10]
        }
    },
    //浮动框
    tooltip:{
    	trigger:'axis',
    	padding:[10,20],
	    axisPointer: { // 坐标轴指示器，坐标轴触发有效
	      type: 'line', // 默认为直线，可选为：'line' | 'shadow'
	      lineStyle: { // 直线指示器样式设置
	        color: '#fff',
	        width:5
	      },
	      crossStyle: {
	        color: '#fff'
	      },
	      shadowStyle: { // 阴影指示器样式设置
	        color: 'rgba(200,200,200,0.2)'
	      }
	    },
	    textStyle: {
	      fontSize: 40,
	      color: '#fff'
	    }
	}
	/*series配置项*/
};

window.pallete = function(index) {
  //console.log(themeDark.color.length);
  var len = themeDark.color.length;
  if (index >= 0 && index < len - 1) {
    return themeDark.color[index];
  }
}
