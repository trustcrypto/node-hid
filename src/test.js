

var HID = require('../');

var devices = HID.devices();

var isTeensy = function(d) { return d.vendorId===0x16C0 && d.productId===0x0486;}
var isRawHidUsage = function(d) {
    return (d.usage==1);
}

console.log("HID devices:",devices);
var deviceInfo = devices.find( function(d) {
  return isTeensy(d) && isRawHidUsage(d);
});
console.log("deviceInfo:",deviceInfo.path);
if( deviceInfo ) {
    device = new HID.HID(deviceInfo.path);
    console.log("device:",device);
}
console.log("device:",device);
if( !device ) {
    console.log(devices);
    console.log("Could not find device in device list");

}
var feature = device.getFeatureReport(0, 8);
console.log('get feature report');
console.log(feature);
