function Watch(){
  this.bodyPart = null;
}


Watch.prototype.wear = function(bodypart){
  this.bodyPart = bodyPart;
};

module.exports = Watch;