$(function(){
	/*切换页面点击事件*/
	topBtnClickEvent();
});

//页面切换事件
function topBtnClickEvent(){
	clickNav('headLeft','headRight');
	clickNav('headRight','headLeft');
}

function clickNav(className,clearClass){
	$("."+className+" li").unbind("click").bind("click",function(){
		$(this).addClass("select").siblings().removeClass("select");
		$("."+clearClass+">li").removeClass("select");
		var html = $(this).attr("page");
		html="app/"+html;
		$("#mainIframe").attr("src",html);
	});
}
