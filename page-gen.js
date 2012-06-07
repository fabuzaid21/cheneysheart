var node_util = require('node_util').sync();
var rm = node_util.rm;
var read = node_util.read;

var arr = ['legal', 'threats', 'case-studies', 'index'];
for(var i = 0; i < arr.length; i++){
	var page = arr[i];
	rm(page + '.html');
	
	var content = read('content/' + page + '.content').toString();
	var pageHTML = read('main.html').toString();
	//console.log(pageHTML);
	//console.log(pageHTML.indexOf("CONTENT"));
	pageHTML = pageHTML.replace("CONTENT", content);
	node_util.write(page + '.html', pageHTML);
} 