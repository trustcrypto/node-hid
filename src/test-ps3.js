var HID = require('../');
var REPL = require('repl');

var repl = REPL.start('node-hid> ');
var hid = new HID.HID(0x16c0,0x0486);

console.log('devices:', HID.devices());
console.log('features', hid.getFeatureReport(0xf2, 17));

hid.gotData = function (err, data) {
    console.log('got ps3 data', data);
    this.read(this.gotData.bind(this));
}

hid.read(hid.gotData.bind(hid));

repl.context.hid = hid;
