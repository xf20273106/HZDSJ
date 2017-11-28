__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
}
//获取脚本库URL路径
var bootPATH = __CreateJSPath("jslib/main.js");//jslib

document.write('<link rel="stylesheet" href=" '+ bootPATH +'css/common.css"  rel="stylesheet" type="text/css"/>');
document.write('<script src="' + bootPATH + 'jslib/jquery.min.js" type="text/javascript" ></script>');
document.write('<script src="' + bootPATH + 'jslib/echarts.js" type="text/javascript" ></script>');
document.write('<script src="' + bootPATH + 'js/common/common.js" type="text/javascript" ></script>');
