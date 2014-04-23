$(document).ready(function(){
  //  ***MAP SIZE SENSITIVE***
  var tileSize = 50;
  var tilesPerSide = 10;
  var map = [];

  var inPlay = false;

  //instantiate the map
  for(var i = 0; i < tilesPerSide; i++){
    var column = [];
    for(var j = 0; j < tilesPerSide; j++){
      var tile = new Tile(i, j, tileSize);
      column.push(tile);
      $('.world').append(tile.$node);
      //  ***MAP SIZE SENSITIVE***
      if(i === 9 && j === 0){
        //target tile
        tile._exit = true;
        tile.$node.addClass('exit');
      }
    }
    map.push(column);
  }

  var chip = new Chip(0, 9, map);

  //listener for global clicks moving Chip
  $(window).on('keydown', function(event){
    if(event.keyCode === 37 && chip._pos[0] !== 0){
      //left
      chip.move(-1, 0);
    }else if(event.keyCode === 38 && chip._pos[1] !== 0){
      //up
      chip.move(0, -1);
    }else if(event.keyCode === 39 && chip._pos[0] !== tilesPerSide - 1){
      //right
      chip.move(1, 0);
    }else if(event.keyCode === 40 && chip._pos[1] !== tilesPerSide - 1){
      //down
      chip.move(0, 1);
    }
  });

  //the append action is wrapped within monster constructor
  var monster = new Dirt(1000, 1, 3, map);


});
