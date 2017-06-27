function Tablet(x, y){
  this.x = x;
  this.y = y;
}

Tablet.prototype.touch = function(x,y){
  return{
    x: x,
    y: y,
  };
};

module.exports = Tablet;