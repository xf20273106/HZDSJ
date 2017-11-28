$(function(){
		//轮播
		
		jQuery(".sjlwBody").slide({mainCell:".bd",autoPage:true,effect:"topLoop",autoPlay:true,vis:4});
		jQuery(".sjyjBody").slide({mainCell:".bd",autoPage:true,effect:"topLoop",autoPlay:true,vis:5});
		jQuery(".jrtt").slide({mainCell:".bd",autoPage:true,effect:"topLoop",autoPlay:true,vis:2});
		jQuery(".fmyq").slide({mainCell:".bd",autoPage:true,effect:"topLoop",autoPlay:true,vis:8});
		jQuery(".hotel").slide({mainCell:".bd",autoPage:true,effect:"topLoop",autoPlay:true,vis:6});
		jQuery(".bar").slide({mainCell:".bd",autoPage:true,effect:"topLoop",autoPlay:true,vis:5});
		jQuery(".gcsjBody").slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click",interTime:10000});
		//事件分类饼图
		$.chat2("Chart_sjfl", "pie", "../json/pState_time.json");
		//警情走势折线图
		var param = {dw:'(件)',areaColor:['','#27AAE1']};
		$.Line("Chart_jqzs", "../json/pState_week.json",param);
		//警情类型
		var param = {dw:'/件',isyBar:true,stateColor:theme.stateColor}
		$.Bar("Chart_jqByType", "bar", "../json/pState_type.json",param);
		//24小时过车数据
		var param = {dw:'/辆'};
		$.Bar('num1','bar','../json/largeData_gcsj.json',param);
		$.Bar('num2','bar','../json/largeData_gcsj.json',param);
		$.Bar('num3','bar','../json/largeData_gcsj.json',param);
		$.Bar('num4','bar','../json/largeData_gcsj.json',param);
		$.Bar('num5','bar','../json/largeData_gcsj.json',param);
		$.Bar('num6','bar','../json/largeData_gcsj.json',param);
		

		$.extend({
			yqFLTJBody:function(id,url){
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
					var myChart = echarts.init(document.getElementById(id));
					var namearr = [];
					for (var i=0;i<xData.length;i++) {
						namearr.push(xData[i]);
					}
					var seriesArr = [];
					for (var i=0;i<xData.length;i++) {
						var seriesA = {
							value:seriesData[0][i],
							name:xData[i]
						}
						seriesArr.push(seriesA)
					}
					var option = {
					    grid:{
					    	x:120,
					    	y:170,
					    	x2:380,
					    	y2:50
					    }, tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)",
					        padding:[30,20,30,20]
					    },
					    series: [
					         {
					            type:'pie',
					            radius : [30, 200],
					            center : ['53%', '50%'],
					            roseType : 'area',
					            data:seriesArr,
					            color:theme.pieColor,
					            label:{
						        	normal:{
						        		fontSize:25,
						        		color:'#fff',
						        		formatter:'{b}({d}%)'
						        	}
						        },
						        labelLine:{
						        	normal:{
						        		show:true,
						        		length:5,
						        		lineStyle:{
						        			color:'#fff',
						        			width:5
						        		}
						        	}
						        }
					        }
					    ]
					};
					myChart.setOption(option,true);
					var timeTicket = null;
					timeTicket && clearInterval(timeTicket);
					var count=0;
					var num = xData.length;
					timeTicket = setInterval(function() {
						//手动触发事件
					    myChart.dispatchAction({
					        type: 'downplay',      //取消高亮指定的数据图形
					        seriesIndex: 0
					    });
					    myChart.dispatchAction({
					        type: 'highlight',    //控制高亮
					        seriesIndex: 0,
					        dataIndex: count % num
					    });
					    myChart.dispatchAction({
					        type: 'showTip',     //提示框的显示
					        seriesIndex: 0,
					        dataIndex: count % num
					    });
					    count++;
					}, 3000);
				}
		  	},
		zdryfb:function(id,types,url,param){
  		
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
        			    formatter:function(value){                     
        			        var ret = "";//拼接加\n返回的类目项  
        			        var maxLength = 2;//每项显示文字个数  
        			        var valLength = value.length;//X轴类目项的文字个数  
        			        var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
        			        if (rowN > 1)//如果类目项的文字大于3,  
        			        {  
        			            for (var i = 0; i < rowN; i++) {  
        			             var temp = "";//每次截取的字符串  
        			             var start = i * maxLength;//开始截取的位置  
        			             var end = start + maxLength;//结束截取的位置  
        			             //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
        			             temp = value.substring(start, end) + "\n";  
        			             ret += temp; //凭借最终的字符串  
        			            }  
        			            return ret;  
        			        }  
        			        else {  
        			            return value;  
        			        }  
        			    } 
        			}
				}],
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
  			},
  		zdrytj:function(id,types,url,param){
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
				var theme1={}	
				 theme1.legend={
    					x : 'center',
        				y : 'bottom',
        				itemGap:25,
        				itemWidth:20,
        				itemHeight:20,
        				textStyle:{
        					color:'#fff',
        					fontSize:25,
        					
        				}
    				};					
				var myChart = echarts.init(document.getElementById(id));
				theme1.legend.formatter = function(name){
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
 	
					theme1.legend.data = xData;
					theme.tooltip.trigger = 'item';
					theme.tooltip.formatter = '{b}：{c}'+tit;
					option = {
						color:theme.color,
						legend:theme1.legend,
						grid:theme.grid,
						tooltip:theme.tooltip,
						series:[{
							type:'pie',
				            radius : [0,250],
				            center : ['50%', '37%'],
				            roseType : 'radius',
				            data:ser,
				            label:{
					        	normal:{
					        		fontSize:30,
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
					        			width:5
					        		}
					        	}
					        }
						}]
					};
				
				
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
			
				}
  			},
  		rksj:function(id,name,data){
  			var myChart = echarts.init(document.getElementById(id));
  			option = {
  				color:["#ffc93a","#d3742d"],
    			tooltip: {
    			    trigger: 'item',
    			    formatter: "{a} <br/>{b}: {c} ({d}%)",
    			    textStyle: {
	      				fontSize: 30,
	      				color: '#fff',
	      				
	   				},
	   				position: [10, 10],			
    			},
    			series: [
    			    {
    			        name:name,
    			        type:'pie',
    			        radius: ['50%', '70%'],
    			        center:["56%","50%"],
    			        avoidLabelOverlap: false,
    			       
    			        label: {
    			            normal: {
    			                show:false,
    			                position: 'center',
    			                textStyle: {
    			                    fontSize: '30',
    			                    fontWeight: 'bold'
    			                }
    			            },
    			            emphasis: {
    			                show: true,
    			                textStyle: {
    			                    fontSize: '30',
    			                    fontWeight: 'bold'
    			                }
    			            }
    			        },
    			        labelLine: {
    			            normal: {
    			                show: false
    			            }
    			        },
    			        data:data,
    			    }
    			]
			};
			myChart.setOption(option,true);
			$(window).resize(function(){
				myChart.resize();
			});

  		},
  		jdcsj:function(id,url,param){
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
					var myChart = echarts.init(document.getElementById(id));
					var namearr = [];
					for (var i=0;i<names.length;i++) {
						namearr.push(names[i]);
					}
					theme.xAxis[0].data = xData;

					var option = {
					    
					    tooltip: {
					        trigger: 'axis'
					    },
					    grid:{
					    	x:120,
					    	y:170,
					    	x2:80,
					    	y2:50
					    },
					    legend: {
					        data:namearr,
					        itemWidth:120,
					        itemHeight:60,
					        x:'right',
					        textStyle:{
					        	color:'#fff',
					        	fontSize:40
					        },
					        padding:[0 ,100 ,50 ,0]
					    },
					    xAxis: theme.xAxis,
					    yAxis:theme.yAxis,
					    series: [
					        {
					            name:namearr[0],
					            type:'line',
					            data:seriesData[0],
					            symbolSize: 30,
               					symbol: "circle",  
					            lineStyle:{
									normal:{
										width:5,
										color:'#fff'
									}
								},itemStyle: {
						            normal: {
						                color: "#ffc93a"
						            }
						        }
					        },{
					            name:namearr[1],
					            type:'line',
					            data:seriesData[1],
               					symbolSize: 30,
               					symbol: "circle",  
					            lineStyle:{
									normal:{
										width:5,
										color:'#fff'
									}
								},itemStyle: {
						            normal: {
						                color: "#7ab3fe"
						            }
						        }
					        }
					    ]
					};
					if(param!=null){
						//单位
						if(param.dw){
							option.yAxis[0].name = param.dw;
							option.yAxis[0].nameTextStyle = {
								color:'#fff',
								fontSize:40
							};
						}	
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
						//手动触发事件
					    myChart.dispatchAction({
					        type: 'downplay',      //取消高亮指定的数据图形
					        seriesIndex: 0
					    });
					    myChart.dispatchAction({
					        type: 'highlight',    //控制高亮
					        seriesIndex: 0,
					        dataIndex: count % num
					    });
					    myChart.dispatchAction({
					        type: 'showTip',     //提示框的显示
					        seriesIndex: 0,
					        dataIndex: count % num
					    });
					    count++;
					}, 3000);
				}
		  	}
		})
		$.yqFLTJBody("yqFLTJBody","../json/option_fl.json");
		//重点人员分布
		var param={dw:"/人"}
		$.zdryfb("zdrylxBody", "bar", "../json/people_zdrk.json",param);
		//重点人员统计
		$.zdrytj("zdryfbBody","rose1","../json/people_zdryPie.json");
		//城市人口数据指数
		$.rksj("ldrk","流动人口",[{value:500, name:'城市人口'},{value:9500, name:'非城市人口'}])
		$.rksj("czrk","常住人口",[{value:6000, name:'城市人口'},{value:4000, name:'非城市人口'}])
		$.rksj("xsr","新生儿出生申报",[{value:3000, name:'城市人口'},{value:7000, name:'非城市人口'}])
		$.rksj("lr","60周岁以上老人",[{value:500, name:'城市人口'},{value:9500, name:'非城市人口'}])
		//机动车办理数据
		var param={dw:"/辆"}
		$.jdcsj("jdcsj","../json/largeData_jdc.json",param);
		
})
