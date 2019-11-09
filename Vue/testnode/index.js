//引入http模块
var http = require("http");
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8080;
//创建服务
var server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end("hello nodejs");
 
});
server.listen(port,hostName,function(){
    console.log(`服务器运行在http://${hostName}:${port}`);
});

var fs = require('fs'),
    HtmlDiffer = require('html-differ').HtmlDiffer,
    logger = require('html-differ/lib/logger');

var html1 = fs.readFileSync('1.html', 'utf-8'),
    html2 = fs.readFileSync('2.html', 'utf-8');

var options = {
        ignoreAttributes: [],
        compareAttributesAsJSON: [],
        ignoreWhitespaces: true,
        ignoreComments: true,
        ignoreEndTags: false,
        ignoreDuplicateAttributes: false
    };

var htmlDiffer = new HtmlDiffer(options);

var diff = htmlDiffer.diffHtml(html1, html2),
    isEqual = htmlDiffer.isEqual(html1, html2),
    res = logger.getDiffText(diff, { charsAroundDiff: 40 });

logger.logDiffText(diff);
