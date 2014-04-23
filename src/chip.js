var Chip = function(left, top, map){
  //gonna be deprecated
  this.$node = $('<span class="chip"></span>');
  this._pos = [left, top];
  this._map = map;
  this.addToTile();
  $('.world').append(this.$node);
  //  ***MAP SIZE SENSITIVE***
  this.renderPos(50, this._pos[0], this._pos[1]);
};

Chip.prototype.hitChips = function(){

};

//render the correct position with CSS transform on screen
Chip.prototype.renderPos = function(tileSize, left, top){
  var cssTranslate = 'translate(' + left * tileSize + 'px,' + top * tileSize + 'px)';
  this.$node.css({transform: cssTranslate});
};

Chip.prototype.move = function(left, top){
  this.removeFromTile();
  this._pos[0] += left;
  this._pos[1] += top;
  this.victoryCheck();
  this.collisionCheck();
  console.log(this._pos[0], this._pos[1]);
  this.addToTile();
  //  ***MAP SIZE SENSITIVE***
  this.renderPos(50, this._pos[0], this._pos[1]);
};

//add string 'chip' to new tile's ._inside it moves to
Chip.prototype.addToTile = function(){
  this._map[this._pos[0]][this._pos[1]]._inside.push('chip');
};

//remove string 'chip' from the old tile's .inside it moves from
Chip.prototype.removeFromTile = function(){
  var posInside = this._map[this._pos[0]][this._pos[1]]._inside.indexOf('chip');
  this._map[this._pos[0]][this._pos[1]]._inside.splice(posInside, 1);
};

Chip.prototype.collisionCheck = function(){
  if(this._map[this._pos[0]][this._pos[1]]._inside.indexOf('monster') !== -1){
    console.log('You lost bro');
  }
};

Chip.prototype.victoryCheck = function(){
  if('_exit' in this._map[this._pos[0]][this._pos[1]]){
    console.log('You win bro');
  }
};
