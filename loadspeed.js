var page = require('webpage').create();
var system = require('system');
var t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js');
  phantom.exit();
}
t = Date.now();
address = system.args[1];
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('fail to load the address');
  } else {
    t = Date.now() - t;
    console.log('loading' + system.args[1]);
    console.log('loading time' + t + 'msec');
  }
  phantom.exit();
});

