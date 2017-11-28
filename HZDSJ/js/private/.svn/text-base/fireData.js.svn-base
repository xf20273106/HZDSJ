$.extend({
	zhsgjqdj:function(id,types,url,param){
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
				        center:['50%','45%'],
						radius:['40%','65%'],
				        label:{
				        	normal:{
				        		fontSize:60,
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
				option.legend.x = 'center';
				option.legend.y = '1200';
				option.legend.textStyle={
					fontSize:40,
					color:'#fff'
				};
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
		}
  	},
  	sjzddwNum:function(id,url){
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
		function echart (tit,names,xData,seriesData){
			var myChart = echarts.init(document.getElementById(id));
			var option = {
			    xAxis : [{
			        data : xData,
			         splitLine : {
		                show:true,
		                lineStyle: {
		                    color: '#74C0D1',
		                    type: 'solid',
		                    width: 3
		                }
		            },
			    	axisLabel:{
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:'40'
			    		},
			    		margin:20
			    	}
			    }],
			    legend: {
			    	data:names,
			    	itemWidth:100,
			    	itemHeight:66,
			    	textStyle:{
			    		color:'#fff',
			    		fontSize:'40'
			    	},
			    	y:120
			    },
			    grid:{
			    	x:120,
			    	x2:150,
			    	y:230,
			    	y2:120
			    },
			    yAxis : [{
			        type : 'value',
			        splitLine:{
			    		lineStyle:{
			    			color: '#74C0D1',
						    width: 3,
						    type: 'solid'
			    		}
			    	},
			    	axisLabel:{
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:'40'
			    		},
			    		margin:20
			    	}
			    	
			    }],
			    title: {
			        text: tit,
			        textStyle:{
			        	color:'#fff',
			        	fontSize:50
			        },
			        x:'center',
			        y:20
			    },
			    series : [{
			    	name:names[0],
			    	type:'line',
			    	data:seriesData[0],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#00CFFF'
						}
					},itemStyle: {
			            normal: {
			                color: "#00CFFF"
			            }
			        }
			    },{
			    	name:names[1],
			    	type:'line',
			    	data:seriesData[1],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#FFD527'
						}
					},itemStyle: {
			            normal: {
			                color: "#FFD527"
			            }
			        }
			    },{
			    	name:names[2],
			    	type:'line',
			    	data:seriesData[2],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#FF8166'
						}
					},itemStyle: {
			            normal: {
			                color: "#FF8166"
			            }
			        }
			    }]
			};
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});
		}
  	},
  	hzyhdw:function(id,url){
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
		function echart (tit,names,xData,seriesData){
			var myChart = echarts.init(document.getElementById(id));
			var option = {
			    xAxis : [{
			        data : xData,
			         splitLine : {
		                show:true,
		                lineStyle: {
		                    color: '#74C0D1',
		                    type: 'solid',
		                    width: 3
		                }
		            },
			    	axisLabel:{
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:'40'
			    		},
			    		margin:20
			    	}
			    }],
			    legend: {
			    	data:names,
			    	itemWidth:100,
			    	itemHeight:66,
			    	textStyle:{
			    		color:'#fff',
			    		fontSize:'40'
			    	},
			    	y:150
			    },
			    grid:{
			    	x:200,
			    	x2:150,
			    	y:280,
			    	y2:220
			    },
			    yAxis : [{
			        type : 'value',
			        splitLine:{
			    		lineStyle:{
			    			color: '#74C0D1',
						    width: 3,
						    type: 'solid'
			    		}
			    	},
			    	axisLabel:{
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:'40'
			    		},
			    		margin:20
			    	}
			    	
			    }],
			    title: {
			        text: tit,
			        textStyle:{
			        	color:'#fff',
			        	fontSize:50
			        },
			        x:'center',
			        y:50
			    },
			    series : [{
			    	name:names[0],
			    	type:'line',
			    	data:seriesData[0],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#00CFFF'
						}
					},itemStyle: {
			            normal: {
			                color: "#00CFFF"
			            }
			        }
			    },{
			    	name:names[1],
			    	type:'line',
			    	data:seriesData[1],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#FFD527'
						}
					},itemStyle: {
			            normal: {
			                color: "#FFD527"
			            }
			        }
			    },{
			    	name:names[2],
			    	type:'line',
			    	data:seriesData[2],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#FF8166'
						}
					},itemStyle: {
			            normal: {
			                color: "#FF8166"
			            }
			        }
			    }]
			};
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});
		}
  	},whpqytj:function(id,url){
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
		function echart (tit,names,xData,seriesData){
			var myChart = echarts.init(document.getElementById(id));
			var option = {
			    xAxis : [{
			        data : xData,
			    	axisLabel:{
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:'40'
			    		},
			    		margin:20
			    	},
			        axisLine: { // 坐标轴线
				      show: true, // 默认显示，属性show控制显示与否
				      lineStyle: { // 属性lineStyle控制线条样式
				        color: '#fff',
				        width: 5
				      }
				    }
			    }],
			    legend: {
			    	data:names,
			    	itemWidth:100,
			    	itemHeight:66,
			    	textStyle:{
			    		color:'#fff',
			    		fontSize:'40'
			    	},
			    	y:150
			    },
			    grid:{
			    	x:150,
			    	x2:100,
			    	y:280,
			    	y2:120
			    },
			    yAxis : [{
			        type : 'value',
			        splitLine:{
			    		lineStyle:{
			    			color: '#586B94',
						    width: 3,
						    type: 'solid'
			    		}
			    	},
			    	axisLabel:{
			    		textStyle:{
			    			color:'#fff',
			    			fontSize:'40'
			    		},
			    		margin:20
			    	},
			        axisLine: { // 坐标轴线
				      show: true, // 默认显示，属性show控制显示与否
				      lineStyle: { // 属性lineStyle控制线条样式
				        color: '#fff',
				        width: 5
				      }
				    }
			    	
			    }],
			    title: {
			        text: tit,
			        textStyle:{
			        	color:'#fff',
			        	fontSize:50
			        },
			        x:'center',
			        y:50
			    },
			    series : [{
			    	name:names[0],
			    	type:'line',
			    	data:seriesData[0],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#00CFFF'
						}
					},itemStyle: {
			            normal: {
			                color: "#00CFFF"
			            }
			        }
			    },{
			    	name:names[1],
			    	type:'line',
			    	data:seriesData[1],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#FFEF14'
						}
					},itemStyle: {
			            normal: {
			                color: "#FFEF14"
			            }
			        }
			    },{
			    	name:names[2],
			    	type:'line',
			    	data:seriesData[2],
			    	symbol: "circle",
			    	symbolSize: 30,
		            lineStyle:{
						normal:{
							width:5,
							color:'#FF8166'
						}
					},itemStyle: {
			            normal: {
			                color: "#FF8166"
			            }
			        }
			    }]
			};
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});
		}
  	},hzzgqk:function(id,url,param){
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
			var typ;
			typ = "bar";
			theme.xAxis[0].boundaryGap = true;
			var ser = [];
			for (var i=0;i<seriesData.length;i++) {
				var series = {
					name:names[i],
					type:typ,
			        data:seriesData[i],
			        areaStyle:{normal:{
			        	color:theme.areacolor[i]
			        }},
			        barGap:0,
			        symbolSize:20,//拐点大小
			        barMaxWidth:60,//柱状图的最大宽度
					lineStyle:{
						normal:{
							width:5
						}
					}
				};
				if(param!=null){
					//单位
					if(param.dw)
						tit=param.dw;
					//区域颜色
					if(param.areaColor){
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
			theme.xAxis[0].data = xData;
			theme.tooltip.trigger = 'axis';
			//构建formatter
			var len = names.length;
			var formatter = [];
			if(len==1){
				theme.tooltip.formatter = '{b}：{c}'+tit;
			}
			else{
				for(var k = 0;k<len;k++){
					formatter[k]='{a'+k+'}：{c'+k+'}'+tit;
				}
				theme.tooltip.formatter = formatter.join('<br/>');
			}
			var option = {
			    title: {
			        text: tit,
			        textStyle:{
			        	color:'#fff',
			        	fontSize:60
			        },
			        x:'center'
			    },
			    color:theme.color,
			    grid:theme.grid,
			    tooltip:theme.tooltip,
			    xAxis : theme.xAxis,
			    yAxis : theme.yAxis,
			    series : ser,
			    legend:{
			    	data:names,
			    	itemWidth:80,
			    	itemHeight:46,
			    	x:'right',
			    	textStyle:{
			    		color:'#fff',
			    		fontSize:'40'
			    	},
			    	y:50
			    }
			};
			option.grid.y=250;
			if(param!=null){
				//线条颜色
				if(param.color)
					option.color = param.color;
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
			}, 2000);
		}
  	},xxdwBottom2:function(id,types,url,param){
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
						title: {
				        text: tit,
				        textStyle:{
				        	color:'#fff',
				        	fontSize:50
				        },
				        x:'center',
				        y:20
				    },
					series : [{
				    	type:'pie',
				        data:ser,
				        center:['50%','65%'],
						radius:['30%','60%'],
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
				option.legend.x = 'center';
				option.legend.y = '110';
				option.legend.itemGap = 20;
				option.legend.textStyle={
					fontSize:30,
					color:'#fff'
				};
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
		}
  	},xxdwBottom1:function(id,types,url,param){
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
						title: {
				        text: tit,
				        textStyle:{
				        	color:'#fff',
				        	fontSize:50
				        },
				        x:'center',
				        y:20
				    },
					series : [{
				    	type:'pie',
				        data:ser,
				        center:['50%','65%'],
						radius:['0%','60%'],
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
				option.legend.x = 'center';
				option.legend.y = '110';
				option.legend.itemGap = 20;
				option.legend.textStyle={
					fontSize:30,
					color:'#fff'
				};
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
		}
  	},gdszddwNum:function(id,types,url,param){
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
			var typ;
			if(types == "line"){
				typ = "line";
				theme.xAxis[0].boundaryGap = false;
			}else if(types == "bar"){
				typ = "bar";
				theme.xAxis[0].boundaryGap = true;
			}
			var ser = [];
			for (var i=0;i<seriesData.length;i++) {
				var series = {
					name:names[i],
					type:typ,
			        data:seriesData[i],
			        barGap: '-100%',//设置柱状图重合但不堆积
			        barMaxWidth:60,
			        itemStyle:{
					    normal: {
					       color:theme.color[i]
					    }
					},
					textStyle:{
						fontSize:40
					}
				};
				ser.push(series);
			}				
			var myChart = echarts.init(document.getElementById(id));
			theme.xAxis[0].data = xData;
			theme.tooltip.trigger = 'axis';
			theme.legendTop.data = names;
			var len = names.length;
			var formatter = [];
			if(len==1){
				theme.tooltip.formatter = '{b}：{c}'+tit;
			}
			else{
				for(var k = 0;k<len;k++){
					formatter[k]='{a'+k+'}：{c'+k+'}'+tit;
				}
				theme.tooltip.formatter = formatter.join('<br/>');
			}

			var option = {
			    title: {
			        text: tit,
			        textStyle:{
			        	color:'#fff',
			        	fontSize:50
			        },
			        x:'center',
			        y:'20'
			    },
			    grid : theme.grid,
			    legend: theme.legendTop, 
			    tooltip : theme.tooltip,
			    xAxis : theme.xAxis,
			    yAxis : theme.yAxis,
			    series : ser
			};
			option.legend.x = 'center';
			option.legend.y = '130';
			option.legend.textStyle={
				fontSize:30,
				color:'#fff'
			};
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});
		}
  	},gjdzhsg:function(id,types,url,param){
		
		var myChart = echarts.init(document.getElementById(id));

		option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他'],
		    	itemWidth:70,
		    	itemHeight:36,
		    	textStyle:{
		    		color:'#fff',
		    		fontSize:'36'
		    	},
		    	y:120
		    },
		    grid: {
		    	y:200,
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    title: {
		        text: "各街道灾害事故接警情况",
		        textStyle:{
		        	color:'#fff',
		        	fontSize:50
		        },
		        x:'center',
		        y:0
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['周一','周二','周三','周四','周五','周六','周日'],
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
			                width:1
			            }
			        },
			        axisLabel:{//设置坐标轴文字样式
			        	color:'#fff',
			        	fontSize:40
			        }
		        }
		    ],
		    yAxis : [
		        {
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
			                width:1
			            }
			        },
			        axisLabel:{//设置坐标轴文字样式
			        	color:'#fff',
			        	fontSize:40
			        }
		        }
		    ],
		    series : [
		       
		        {
		            name:'搜索引擎',
		            type:'bar',
		            barWidth : 50,
		            data:[1062, 1018, 1064, 1026, 1879, 1900, 1570]
		        },
		        {
		            name:'百度',
		            type:'bar',
		            stack: '搜索引擎',
		            barGap:'0%',
		            barWidth : 50,
		            data:[620, 732, 701, 734, 1090, 1130, 1120]
		        },
		        {
		            name:'谷歌',
		            type:'bar',
		            stack: '搜索引擎',
		            data:[120, 132, 101, 134, 290, 230, 220]
		        },
		        {
		            name:'必应',
		            type:'bar',
		            stack: '搜索引擎',
		            data:[60, 72, 71, 74, 190, 130, 110]
		        },
		        {
		            name:'其他',
		            type:'bar',
		            stack: '搜索引擎',
		            data:[62, 82, 91, 84, 109, 110, 120]
		        }
		    ]
		};

		myChart.setOption(option,true);
		$(window).resize(function(){
			myChart.resize();
		});
  	}
});


