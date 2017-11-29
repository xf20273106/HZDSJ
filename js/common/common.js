/*通用方法*/
//ajax请求
function doAjax(type,url,param,op,callback){
	$.ajax({
		type: type,
		url: url,
		data: param,
		async:true,
		dataType: 'json',
		success: function(rsMap){
		    if (callback != null){
		    	callback(rsMap,op);
		    }
		},error: function(req,status,e){
			alert("执行Ajax请求["+url+"]异常，信息："+req+"==="+status+"==="+e);
		}
	});
}