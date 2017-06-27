var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function SmartPhone(phonenumber){

  Phone.call(this, phonenumber);
  Tablet.call(this);
  GameConsole.call(this, "Smart Phone");
  WebBrowser.call(this);
}

function extend(destination, source) {
  for(var k in source) {
     if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
 }
  return destination;
 }

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;