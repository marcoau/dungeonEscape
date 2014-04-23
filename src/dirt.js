var Dirt = function(fps, left, top, map){
  this.$node = $('<span class="dirt"></span>');
  Monster.call(this, fps, left, top, map);
};

Dirt.prototype = Object.create(Monster.prototype);
Dirt.prototype.constructor = Dirt;

Dirt.prototype.step = function(fps){
  this.action();
  Monster.prototype.step.call(this, fps);
};

Dirt.prototype.action = function(){
  var direction = Math.floor(Math.random() * 6);
  //up, right, down, left respectively
  if(direction === 0){
    //left
    if (this._pos[0] === 0){
      this.action();
    }else{
      this.move(-1, 0);
    }
  }else if(direction === 1){
    //up
    if (this._pos[1] === 0){
      this.action();
    }else{
      this.move(0, -1);
    }
  }else if(direction === 2){
    //right
    //  ***MAP SIZE SENSITIVE***
    if (this._pos[0] === 10 - 1){
      this.action();
    }else{
      this.move(1, 0);
    }
  }else if(direction === 3){
    //down
    //  ***MAP SIZE SENSITIVE***
    if (this._pos[1] === 10 - 1){
      this.action();
    }else{
      this.move(0, 1);
    }
  }
};
