function NintendoDS(){
  GameConsole.call(this, "NintendoDS");
}

function extend(destination, source) {
  for(var k in source) {
     if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
 }
  return destination;
 }

extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;