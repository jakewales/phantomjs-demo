var page = require('webpage').create();
page.open('https://www.baidu.com', function(status) {
  console.log(status);
  if (status === 'success') {
    page.render('test.png');
  }
  phantom.exit();
});
