$(function(){
	initUl();
	initMap();
});
function initMap(){
	new ol.Map({
	    layers: [
	        new ol.layer.Tile({
	            source: new ol.source.OSM()
	        })
	    ],
	    view: new ol.View({
	        center: [0, 0],
	        zoom: 5
	    }),
	    target: 'pRmap'
	});
}
//初始化ul列表
function initUl(){
	//左列表1
	var sb1 = new Array();
	doAjax("get","../json/policeResource.json",{},{},function(rsMap){
		if(rsMap.code==0){
			var data = rsMap.data;
			$(data).each(function(i){
				if(i==0){
					sb1.push("<li class='leftbg2'><p class='li_title yellow'>"+data[i].title+"</p>");
				}else if(i==3){
					sb1.push("<li class='leftbg1'><p class='li_title yellow'>"+data[i].title+"</p>");
				}else{
					sb1.push("<li class='leftbg3'><p class='li_title yellow'>"+data[i].title+"</p>");
				}
				var info = data[i].info;
				$(info).each(function(j){
					if(info.length>1){
						var height = Math.floor(245/info.length);
						sb1.push("<p class='mini'><span style='line-height:"+height+"px;'><img class='icon' src='../image/name.png'/><i class='li_name'>"+info[j].name+"</i></span><span style='width:40%;line-height:"+height+"px;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info[j].phone+"</i></span><span style='line-height:"+height+"px;'><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info[j].radio+"</i></span></p>");
					}
					else{
						sb1.push("<p><span><img class='icon' src='../image/name.png'/><i class='li_name'>"+info[j].name+"</i></span><span style='width:40%;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info[j].phone+"</i></span><span><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info[j].radio+"</i></span></p>");
					}
				});
				sb1.push("</li>");
			});
			//左列表2
			doAjax("get","../json/policeResource02.json",{},{},function(rsMap1){
				if(rsMap1.code==0){
					var data1 = rsMap1.data;
					$(data1).each(function(i){
						sb1.push("<li class='leftbg3'><p class='li_title orange'>"+data1[i].title+"</p>");
						var info1 = data1[i].info;
						$(info1).each(function(j){
							if(info1.length>1){
								var height = Math.floor(245/info1.length);
								sb1.push("<p class='mini'><span style='line-height:"+height+"px;'><img class='icon' src='../image/name.png'/><i class='li_name'>"+info1[j].name+"</i></span><span style='width:40%;line-height:"+height+"px;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info1[j].phone+"</i></span><span style='line-height:"+height+"px;'><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info1[j].radio+"</i></span></p>");
							}
							else{
								sb1.push("<p><span><img class='icon' src='../image/name.png'/><i class='li_name'>"+info1[j].name+"</i></span><span style='width:40%;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info1[j].phone+"</i></span><span><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info1[j].radio+"</i></span></p>");
							}
						});
						sb1.push("</li>");
					});
					$(".left_ul").html(sb1.join(''));
				}else{
					alert("查询左列表2信息出错！错误信息："+rsMap1.msg);
				}
			});
		}else{
			alert("查询左列表1信息出错！错误信息："+rsMap.msg);
		}
	});
	//底部ul
	doAjax("get","../json/policeResource03.json",{},{},function(rsMap){
		if(rsMap.code==0){
			var data = rsMap.data;
			var sb = new Array();
			$(data).each(function(i){
				sb.push("<li class='bg'><p class='li_title green' style='line-height:120px;'>"+data[i].title+"</p>");
				var info = data[i].info;
				$(info).each(function(j){
					if(info.length>1){
						var height = Math.floor(245/info.length);
						sb.push("<p class='mini'><span style='line-height:"+height+"px;'><img class='icon' src='../image/name.png'/><i class='li_name'>"+info[j].name+"</i></span><span style='width:40%;line-height:"+height+"px;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info[j].phone+"</i></span><span style='line-height:"+height+"px;'><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info[j].radio+"</i></span></p>");
					}
					else{
						sb.push("<p><span><img class='icon' src='../image/name.png'/><i class='li_name'>"+info[j].name+"</i></span><span style='width:40%;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info[j].phone+"</i></span><span><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info[j].radio+"</i></span></p>");
					}
				});
				sb.push("</li>");
			});
			$(".center_ul").html(sb.join(''));
		}else{
			alert("查询底部列表信息失败,错误信息："+rsMap.msg);
		}
	});
	//右列表
	doAjax("get","../json/policeResource04.json",{},{},function(rsMap){
		if(rsMap.code==0){
			var data = rsMap.data;
			var sb = new Array();
			$(data).each(function(i){
				sb.push("<li class='rightbg'><p class='li_title red'>"+data[i].title+"</p>");
				var info = data[i].info;
				$(info).each(function(j){
					if(info.length>1){
						var height = Math.floor(245/info.length);
						sb.push("<p class='mini'><span style='line-height:"+height+"px;'><img class='icon' src='../image/name.png'/><i class='li_name'>"+info[j].name+"</i></span><span style='width:40%;line-height:"+height+"px;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info[j].phone+"</i></span><span style='line-height:"+height+"px;'><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info[j].radio+"</i></span></p>");
					}
					else{
						sb.push("<p><span><img class='icon' src='../image/name.png'/><i class='li_name'>"+info[j].name+"</i></span><span style='width:40%;'><img class='icon' src='../image/phone.png'><i class='li_phone'>"+info[j].phone+"</i></span><span><img class='icon radio' src='../image/radio.png'/><i class='li_radio'>"+info[j].radio+"</i></span></p>");
					}
				});
				sb.push("</li>");
			});
			$(".right_ul").html(sb.join(''));
		}else{
			alert("查询右列表失败，错误信息："+rsMap.msg);
		}
	});
}