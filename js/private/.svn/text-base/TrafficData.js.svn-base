//地图添加
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
			target: 'TrafficMap'
		});
		
		var view = map.getView();
		var hz = ol.proj.fromLonLat([119, 34]);
		view.setZoom(10);
		view.setCenter(hz);
		
		//非现场执法交通违法统计图
		//正式用时可删除dw
		var param = {dw:'(件)'};
		$.Bar('bar_fxc','bar','../json/people_wbsj.json',param);
		//现场执法交通违法统计图
		//正式用时可删除dw
		var param = {dw:'(件)',color:['#27AAE1']};
		$.Bar('bar_xc','bar','../json/people_wbsj.json',param);
		//道路交通事故
		//正式用时可删除dwl
		var param = {dw:'(件)',color:['#27AAE1','#FBB040'],areaColor:['','#626357']};
		$.Line('line_dljt', '../json/people_jdrz.json',param);
		//当前进出城大道干道车流量
		var param = {dw:'(辆)',fluxControl:[3000,4000],fluxColor:['#1EF481','#1E6FF4','#FF0012']};
		$.Bar('bar_jccflux','bar','../json/traffic_jccflux.json',param);
		//当前西方向干道车流量统计图
		var param = {dw:'(辆)',fluxControl:[3000,4000],fluxColor:['#1EF481','#1E6FF4','#FF0012']};
		$.Bar('bar_westflux','bar','../json/traffic_westflux.json',param);
		//机动车、驾驶证统计
		var param = {dw:'(辆)',color:['#27AAE1','#FBB040','#A27FCD','#B7DD68'],areaColor:['#27AAE1','#626357','','']}
		$.Line('line_jdc', '../json/traffic_jdc.json',param);
		//机动车辆辖区分布统计图
		var param = {dw:'/辆',legend:theme.legendLeft,center:['65%','50%'],radius:['20%','60%'],fontsize:50};
		$.chat2('pie_jdcl','rose2','../json/people_zdrk.json',param);