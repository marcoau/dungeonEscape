var Monster = function(fps, left, top, map){
  //gonna be deprecated
  //this.$node = $('<span class="monster"></span>');
  this._fps = fps;
  this._pos = [left, top];
  this._map = map;
  this.addToTile();
  $('.world').append(this.$node);
  //  ***MAP SIZE SENSITIVE***
  this.renderPos(50, this._pos[0], this._pos[1]);
  this.step(fps);
};

Monster.prototype.hitChips = function(){

};

//pacer of monster action
Monster.prototype.step = function(fps){
  var that = this;
  //  ***MAP SIZE SENSITIVE***
  that.renderPos(50, that._pos[0], that._pos[1]);
  setTimeout(function(){
    that.step();
  }, this._fps);
};

//render the correct position with CSS transform on screen
Monster.prototype.renderPos = function(tileSize, left, top){
  var cssTranslate = 'translate(' + left * tileSize + 'px,' + top * tileSize + 'px)';
  this.$node.css({transform: cssTranslate});
};

Monster.prototype.move = function(left, top){
  this.removeFromTile();
  this._pos[0] += left;
  this._pos[1] += top;
  this.collisionCheck();
  this.addToTile();
};

//add string 'chip' to new tile's ._inside it moves to
Monster.prototype.addToTile = function(){
  this._map[this._pos[0]][this._pos[1]]._inside.push('monster');
};

//remove string 'chip' from the old tile's .inside it moves from
Monster.prototype.removeFromTile = function(){
  var posInside = this._map[this._pos[0]][this._pos[1]]._inside.indexOf('monster');
  this._map[this._pos[0]][this._pos[1]]._inside.splice(posInside, 1);
};

Monster.prototype.collisionCheck = function(){
  if(this._map[this._pos[0]][this._pos[1]]._inside.indexOf('chip') !== -1){
    console.log('You lost bro');
  }
};


