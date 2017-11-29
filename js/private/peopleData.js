//常住人口数据
var param = {dw:'/人',isDj:true};
$.Bar("ChartCZ","bar","../json/people_czrk.json",param);
//流动人口
var param = {dw:'/人'};
$.Bar("ChartLD","bar","../json/people_ldrk.json",param);
//重点人员
$.chat2("ChartZDPie","rose1","../json/people_zdryPie.json");
var param = {dw:'/人'};
$.Bar("ChartZDBar","bar","../json/people_zdrk.json",param);
//区域人口
var param = {dw:'/人'};
$.chat2("ChartQY","rose2","../json/people_zdrk.json",param);
//酒店入住
var param = {dw:'/人'};
$.Line("ChartJD", "../json/people_jdrz.json",param);
//网吧数据
var param = {dw:'/人'};
$.Line("ChartWB", "../json/people_wbsj.json",param);