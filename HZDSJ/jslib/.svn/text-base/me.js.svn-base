
/*
 * (c) Copyright 2017 jiawan. All Rights Reserved.  
 * */

$.extend({
	/*
	 * div适应屏幕的大小
		$.autoToWindow('.box');
	*/
  	autoToWindow: function(obj) { 
  		$(obj).width($(window).width());
	    $(obj).height($(window).height());
	    $(window).resize(function(){
	        $(obj ).width($(window).width());
	        $(obj).height($(window).height());
	    });
  	},
  	/*
  	 * 截取字符串的前num位
		var a = "asdfghjkl";
		alert($.splitString(a,1));
	*/
  	splitString:function(obj,num){
  		return obj.substr(0,num);
  	},
  	/*居中显示div
  		$.centerShow(".box")
  	*/
  	centerShow:function(obj){
  		var height=$(window).height();
	    var width=$(window).width();
	    var div_w=$(obj).width();
	    var div_h=$(obj).height();
	    $(obj).css("position","absolute");
	    $(obj).css("z-index","99999999");
	    $(obj).css("left",(width/2)-(div_w/2));
	    $(obj).css("top",(height/2)-(div_h)/2);
  	},

  	/*
  	 * 饼状图或者雷达图
  	 */
  	chat2:function(id,types,url,param){
  		$.ajax({
			type:"get",
			url:url,
			async:true,
			dataType:"json",
			success:function(data){
				var data = data.data;
				var tit = data[0].title;
				var xData = data[0].xData;
				var seriesData = data[0].seriesData[0];
				echart(tit,xData,seriesData);
			},error:function(data){
				alert("请求异常"+data);
			}
		});
		
		function echart(tit,xData,seriesData){
			var ser = [];
			for (var i=0;i<xData.length;i++) {
				var series = {
					value:seriesData[i],
			        name:xData[i]
				};
				ser.push(series);
			}				
			var myChart = echarts.init(document.getElementById(id));
			theme.legend.formatter = function(name){
				var index = 0;
				xData.forEach(function(value,i){
					if(value == name){
						index = i;
					}
				});
				return name + "(" + seriesData[index] + tit + ")";
			};
			var option;
			if(param!=null){
				if(param.dw){
					tit = param.dw;
				}
			}
			if(types == "pie"||types=='hpie'){
				theme.legendTop.data = xData;
				theme.tooltip.trigger = 'item';
				theme.tooltip.formatter = '{b}：{c}'+tit;
				option = {
					color:theme.stateColor,
					legend:theme.legendTop,
					grid:theme.grid,
					tooltip:theme.tooltip,
					series : [{
				    	type:'pie',
				        data:ser,
				        label:{
				        	normal:{
				        		fontSize:40,
				        		color:'#fff',
				        		position: 'inner',
				        		formatter:'{d}%'
				        	}
				        }
				    }]
				};
				if(types == 'hpie'){
					option.center = ['30%','50%'];
					option.radius = ['30%','50%'];
					option.legend.x = 'right';
					option.legend.right = '10%';
					option.legend.top = 'middle';
					option.legend.orient='vertical';
					option.legend.formatter = function(name){
						var index = 0;
						xData.forEach(function(value,i){
							if(value == name){
								index = i;
							}
						});
						return name + "(" + seriesData[index] + tit + ")";
					};
				}
			}else if(types == "funnel"){
				option = {
					series : [{
				    	type:'funnel',
				        data:ser
				    }]
				}
			}else if(types=="rose1"){
				theme.legend.data = xData;
				theme.tooltip.trigger = 'item';
				theme.tooltip.formatter = '{b}：{c}'+tit;
				option = {
					color:theme.color,
					legend:theme.legend,
					grid:theme.grid,
					tooltip:theme.tooltip,
					series:[{
						type:'pie',
			            radius : [0,350],
			            center : ['50%', '35%'],
			            roseType : 'radius',
			            data:ser,
			            label:{
				        	normal:{
				        		fontSize:50,
				        		color:'#fff',
				        		formatter:'{b}({d}%)'
				        	}
				        },
				        labelLine:{
				        	normal:{
				        		show:true,
				        		length:30,
				        		length2:30,
				        		lineStyle:{
				        			color:'#fff',
				        			width:10
				        		}
				        	}
				        }
					}]
				};
			}else if(types=="rose2"){
				if(param!=null){
					//单位
					if(param.dw){
						tit = param.dw;
					}
				}
				theme.legend.data = xData;
				theme.tooltip.trigger = 'item';
				theme.tooltip.formatter = '{b}：{c}'+tit;
				option = {
					color:theme.pieColor,
					grid:theme.grid,
					legend:theme.legend,
					tooltip:theme.tooltip,
					series:[{
						type:'pie',
			            radius : [150,650],
			            center : ['50%', '40%'],
			            roseType:'radius',
			            data:ser,
			            label:{
				        	normal:{
				        		fontSize:60,
				        		color:'#fff',
				        		formatter:'{b}({d}%)'
				        	}
				        },
				        labelLine:{
				        	normal:{
				        		show:true,
				        		length:30,
				        		length2:30,
				        		lineStyle:{
				        			color:'#fff',
				        			width:10
				        		}
				        	}
				        }
					}]
				};
				if(param!=null){
					//图例
					if(param.legend)
						option.legend = param.legend;
						option.legend.data = xData;
						option.legend.formatter = function(name){
							var index = 0;
							xData.forEach(function(value,i){
								if(value == name){
									index = i;
								}
							});
							return name + "(" + seriesData[index] + tit + ")";
						};
					//中心位置
					if(param.center)
						option.series[0].center = param.center;
					//圆环大小
					if(param.radius)
						option.series[0].radius = param.radius;
					if(param.fontsize)
						option.series[0].label.normal.fontSize = param.fontsize;
				}
			}
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});
			//轮播显示浮动框信息
			var timeTicket = null;
			timeTicket && clearInterval(timeTicket);
			var count=0;
			var num = xData.length;
			timeTicket = setInterval(function() {
			    myChart.dispatchAction({
			        type: 'downplay',
			        seriesIndex: 0
			    });
			    myChart.dispatchAction({
			        type: 'highlight',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    myChart.dispatchAction({
			        type: 'showTip',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    count++;
			}, 3000);
			/*setInterval(function(){
				myChart.clear();
				myChart.setOption(option,true);
			},35000);*/
		}
  	},
	/*
	 * 环形图
	 */
	chat4:function(id,types,url,param){
  		$.ajax({
			type:"get",
			url:url,
			async:true,
			dataType:"json",
			success:function(data){
				var data = data.data;
				var tit = data[0].title;
				var xData = data[0].xData;
				var seriesData = data[0].seriesData[0];
				echart(tit,xData,seriesData);
			},error:function(data){
				alert("请求异常"+data);
			}
		});
		
		function echart(tit,xData,seriesData){
			var ser = [];
			for (var i=0;i<xData.length;i++) {
				var series = {
					value:seriesData[i],
			        name:xData[i]
				};
				ser.push(series);
			}				
			var myChart = echarts.init(document.getElementById(id));
			theme.legend.formatter = function(name){
				var index = 0;
				xData.forEach(function(value,i){
					if(value == name){
						index = i;
					}
				});
				return name + "(" + seriesData[index] + tit + ")";
			};
			var option;
			if(types == "pie"){
				theme.legendTop.data = xData;
				theme.tooltip.trigger = 'item';
				theme.tooltip.formatter = '{b}：{c}'+tit;
				option = {
					color:theme.stateColor,
					legend:theme.legendTop,
					grid:theme.grid,
					tooltip:theme.tooltip,
					series : [{
				    	type:'pie',
				        data:ser,
				        center:['30%','50%'],
						radius:['60%','95%'],
				        label:{
				        	normal:{
				        		fontSize:30,
				        		color:'#102B65',
				        		position: 'inner',
				        		formatter:'{d}%'
				        	}
				        },
				        itemStyle: {
				            normal: {
				                borderWidth: 10,
				                borderColor: '#102B65',
				            }
				        }
				    }]
				};
				option.legend.x = 'right';
				option.legend.right = '10%';
				option.legend.top = 'middle';
				option.legend.orient='vertical';
				option.legend.formatter = function(name){
					var index = 0;
					xData.forEach(function(value,i){
						if(value == name){
							index = i;
						}
					});
					return name + "(" + seriesData[index] + tit + ")";
				};
			}
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});
			//轮播显示浮动框信息
			var timeTicket = null;
			timeTicket && clearInterval(timeTicket);
			var count=0;
			var num = xData.length;
			timeTicket = setInterval(function() {
			    myChart.dispatchAction({
			        type: 'downplay',
			        seriesIndex: 0
			    });
			    myChart.dispatchAction({
			        type: 'highlight',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    myChart.dispatchAction({
			        type: 'showTip',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    count++;
			}, 5000);
			/*setInterval(function(){
				myChart.clear();
				myChart.setOption(option,true);
			},35000);*/
		}
  	},
  	/*
  	 * 折线图
  	 */
  	Line:function(id,url,param){
  		//1.获取数据结构
  		$.ajax({
			type:"get",
			url:url,
			async:true,
			dataType:"json",
			success:function(data){
				var data = data.data;
				var tit = data[0].title;
				var names = data[0].names;
				var xData = data[0].xData;
				var seriesData = data[0].seriesData;
				echart(tit,names,xData,seriesData);
			},error:function(data){
				alert("请求异常"+data);
			}
		});
		
		function echart(tit,names,xData,seriesData){
			typ = 'line';
			/*
			 * 2.构建数据series
			 */
			var ser = [];
			for(var i=0;i<seriesData.length;i++){
				var series = {
					name:names[i],
					type:typ,
					data:seriesData[i],
					areaStyle:{
						normal:{
							color:theme.areacolor[i]
						}
					},//设置折线图阴影区域颜色
					symbolSize:20,//拐点大小
					lineStyle:{
						normal:{
							width:5
						}
					}
				};
				if(param!=null){
					//修改每条线的区域阴影颜色
					if(param.areaColor){
						//不附加颜色
						if(param.areaColor[i]==''){
							series.areaStyle = {};
						}
						else{
							series.areaStyle.normal.color = param.areaColor[i];
						}
					}
				}
				ser.push(series);
			}
			var myChart = echarts.init(document.getElementById(id));
			/*
			 * 3.正式构建option
			 */
			var option = {
				title:{
					text:tit,
					show:false,
					textStyle:{
						color:'#fff',
						fontSize:50
					}
				},
				color:theme.color,
				grid:theme.grid,
				tooltip:theme.tooltip,
				xAxis:theme.xAxis,
				yAxis:theme.yAxis,
				series:ser
			};
			if(param!=null){
				//修改线条颜色
				if(param.color){
					option.color = param.color;
				}
				//配置数量单位
				if(param.dw){
					option.yAxis[0].name = param.dw;
					option.yAxis[0].nameTextStyle = {
						color:'#fff',
						fontSize:40
					};
				}
				//是否显示标题
				if(param.isShowTit){
					option.title.show = param.isShowTit;
				}
			}
			/*
			 * 4.构建统计图的各项配置项
			 */
			option.xAxis[0].boundaryGap = false;//设置横坐标从坐标0开始，与y轴无间隔
			option.xAxis[0].data = xData;//横坐标赋值
			option.tooltip.trigger = 'axis';//柱形图或折线图时
			//构建浮动框的字段
			var formatter = [];
			var len = names.length;//names定义每条线的名字标识
			if(len<=1){
				option.tooltip.formatter = '{b}:{c}'+param.dw;
			}
			else{
				for(var k=0;k<len;k++){
					formatter[k]='{a'+k+'}<br/>{b'+k+'}:{c'+k+'}'+param.dw;
				}
				option.tooltip.formatter = formatter.join('<br/>');
			}
			
			
			/*
			 * 5.将构建好的option赋予chart容器并设置统计图自适应resize
			 */
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});
			/*
			 * 6.设置浮动框轮播
			 */
			var timeTicket = null;
			timeTicket && clearInterval(timeTicket);
			var count=0;
			var num = xData.length;
			timeTicket = setInterval(function() {
			    myChart.dispatchAction({
			        type: 'downplay',
			        seriesIndex: 0
			    });
			    myChart.dispatchAction({
			        type: 'highlight',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    myChart.dispatchAction({
			        type: 'showTip',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    count++;
			}, 2000);
		}
  	},
  	/*
  	 * 柱状图
  	 */
  	Bar:function(id,types,url,param){
  		/*
  		 * 1.获取结构数据
  		 */
  		$.ajax({
			type:"get",
			url:url,
			async:true,
			dataType:"json",
			success:function(data){
				var data = data.data;
				var tit = data[0].title;
				var names = data[0].names;
				var xData = data[0].xData;
				var seriesData = data[0].seriesData;
				echart(tit,names,xData,seriesData);
			},error:function(data){
				alert("请求异常"+data)
			}
		});
		function echart(tit,names,xData,seriesData){
			/*
			 * 2.构建数据series
			 */
			var ser = [];
			for(var i=0;i<seriesData.length;i++){
				var series = {
						name:names[i],
						type:'bar',
						data:seriesData[i],
						barGap:0,//设置不同类别的柱状图之间的间隔为0
						barMaxWidth:60//柱状图的最大宽度
				};
				if(param!=null){
					//设置流量拥挤度
					if(param.fluxControl){
						var item = param.fluxControl;
						var color = param.fluxColor;
						var data = seriesData[i];
						series.itemStyle ={ 
							normal: {
						        color: function (params){
						        	if(data[params.dataIndex]<=item[0])
	                        			return color[0];
	                        		else if(data[params.dataIndex]>item[1])
	                        			return color[2];
	                        		else
	                        			return color[1];
	                    		}
						    }
						};
					}
					//设置同类每个柱子颜色不同
					if(param.stateColor){
						if(param.stateColor.length!=1){
							series.itemStyle = {
								normal: {
							        color: function (params){
		                        		return param.stateColor[params.dataIndex];
		                    		}
							    }
							};
						}
						else{
							series.itemStyle = {
								normal:{
									color:param.stateColor[0]
								}
							};
						}
					}
					//堆积柱状图
					if(param.isDj){
						series.barGap = '-100%';
					}
				}
				ser.push(series);
			}
			var myChart = echarts.init(document.getElementById(id));
			/*
			 * 3.构建option
			 */
			var option = {
				title:{
					text:tit,
					show:false,
					textStyle:{
						color:'#fff',
						fontSize:50
					}
				},
				color:theme.color,
				grid:theme.grid,
				tooltip:theme.tooltip,
				xAxis:theme.xAxis,
				yAxis:theme.yAxis,
				series:ser
			};
			/*
			 * 4.构建统计图中的各项配置项
			 */
			option.xAxis[0].data = xData;
			option.tooltip.trigger = 'axis';
			option.xAxis[0].boundaryGap = true;
			
			if(param!=null){
				//单位
				if(param.dw){
					option.yAxis[0].name = param.dw;
					option.yAxis[0].nameTextStyle = {
						color:'#fff',
						fontSize:40
					};
				}
				//是否显示标题
				if(param.isShowTit){
					option.title.show = param.isShowTit;
				}
				//柱子颜色
				if(param.color){
					option.color = param.color;
				}
				//横向柱状图
				if(param.isyBar){
					var xAxis = option.xAxis;
					var yAxis = option.yAxis;
					option.xAxis = yAxis;
					option.yAxis = xAxis;
					//隐藏坐标轴
					option.xAxis[0].show = false;
					option.yAxis[0].axisLine.show = false;
					option.yAxis[0].axisTick.show = false;
				}
			}
			//构建formatter
			var len = names.length;
			var formatter = [];
			if(len<=1){
				option.tooltip.formatter = '{b}:{c}'+param.dw;
			}
			else{
				for(var k=0;k<len;k++){
					formatter[k]='{a'+k+'}<br/>{b'+k+'}:{c'+k+'}'+param.dw;
				}
				option.tooltip.formatter = formatter.join('<br/>');
			}
			/*
			 * 5.chart容器加载option并设置统计图resize
			 */
			myChart.setOption(option,true);
			//恢复坐标设置
			option.xAxis[0].show = true;
			option.yAxis[0].axisLine.show = true;
			option.yAxis[0].axisTick.show = true;
			$(window).resize(function(){
				myChart.resize();
			});
			/*
			 * 6.设置浮动框轮播
			 */
			var timeTicket = null;
			timeTicket && clearInterval(timeTicket);
			var count=0;
			var num = xData.length;
			timeTicket = setInterval(function() {
			    myChart.dispatchAction({
			        type: 'downplay',
			        seriesIndex: 0
			    });
			    myChart.dispatchAction({
			        type: 'highlight',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    myChart.dispatchAction({
			        type: 'showTip',
			        seriesIndex: 0,
			        dataIndex: count % num
			    });
			    count++;
			}, 3000);
		}
  	}
});