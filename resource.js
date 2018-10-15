var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');
var path = 'core.js';

var pageList = [];

page.open('http://es6.ruanyifeng.com', function(response) {
  var content = page.evaluate(function() {
    return document.querySelectorAll('ol[start="0"]>li>a');
  });
  if (response === 'success') {
    pageList = content;
    console.log(pageList.length);
  }
  phantom.exit();
});

page.onLoadStarted = function() {
  var currentUrl = page.evaluate(function() {
    return window.location.href;
  });
  console.log('current page ' + currentUrl);
}

page.onResourceTimeout = function(request) {
  console.log('request time out');
}