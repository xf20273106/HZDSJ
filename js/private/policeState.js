//计算每个带背景div(.indiv)的高度
$(".indiv").each(function() {
	var divHeight = $(this).parent("div").height();
	var height = divHeight - 60;
	$(this).css("height", height + 'px');
});

//初始化地图
var map = new ol.Map({
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
	],
	view: new ol.View({
		center: [0, 0],
		zoom: 5
	}),
	target: 'centerMap'
});

var view = map.getView();
var hz = ol.proj.fromLonLat([119, 34]);
view.setZoom(10);
view.setCenter(hz);

//统计图初始化
$.chat2("Chart_sjfl", "pie", "../json/pState_time.json");
$.chat4("Chart_jcj", "pie", "../json/pState_jcj.json");
var param = {dw:'(件)',areaColor:['','#27AAE1']};
$.Line("Chart_jqzs", "../json/pState_week.json",param);
var param = {dw:'/件',isyBar:true,stateColor:theme.stateColor}
$.Bar("Chart_jqByType", "bar", "../json/pState_type.json",param);
var param = {dw:'(件)'};
$.Line("LChartDay", "../json/pState_day.json",param);
var param = {dw:'(件)'};
$.Line("LChartWeek", "../json/pState_week.json",param);
var param = {dw:'(件)'};
$.Line("LChartMonth", "../json/pState_month.json",param);
var param = {dw:'/件',stateColor: ['#FF8166'],isyBar:true};
$.Bar("Bar_fffz", "bar", "../json/pState_type.json", param);
var param = {dw:'/件',stateColor: ['#00CFFF'],isyBar:true};
$.Bar("Bar_110", "bar", "../json/pState_type.json", param);
var param = {dw:'/件',stateColor: ['#F7CC4A'],isyBar:true};
$.Bar("Bar_pm", "bar", "../json/pState_type.json", param);