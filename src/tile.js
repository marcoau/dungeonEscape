var Tile = function(left, top, tileSize){
  this.$node = $('<span class=tile></span>');
  this._pos = [left, top];
  this._inside = [];
  this.initialize(tileSize);
};

Tile.prototype.initialize = function(tileSize){
  var cssTranslate = 'translate(' + this._pos[0] * tileSize + 'px,' + this._pos[1] * tileSize + 'px)';
  this.$node.css({width: tileSize, height: tileSize, transform: cssTranslate});
};

Tile.prototype.lightToggle = function(){
  this.$node.toggleClass('lightup');
};
