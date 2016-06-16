function Game(players) {
  this.turn=0;
  this.board = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]];
  this.players = players;
}

Game.prototype.toggleTurn = function(){
  (this.turn === 0) ? this.turn += 1 : this.turn = 0;
}

Game.prototype.checkWin = function(){
  var mark = this.turn + 1;
  var win = false;
  debugger;
  for(var i = 0; i < this.board.length; i++){
    //veritical
    if(this.board[0][i] === mark && this.board[1][i] === mark && this.board[2][i] === mark){
      win = true;
    }
    // horizontal
    if(this.board[i][0] === mark && this.board[i][1] === mark && this.board[i][2] === mark){
      win = true;
    }
    //diagonal (down) starting from top left
    if(this.board[i][0] === mark && this.board[i+1][1] === mark && this.board[i+2][2]){
      win = true;
    }
    // diagonal (up) starting from bottom left
    if(this.board[i][2] === mark && this.board[i+1][1] === mark && this.board[i+2][0]){
      win = true;
    }
    return win;
  }
}




$(function(){
  $('button.board').prop("disabled", true);
  $('#newgame').click(function(event){
    debugger;
    $('button.board').prop("disabled", false);
    $('#newgame').prop("disabled", true);
    $('#players').prop("disabled", true);
    var game = new Game($('#players').val());

    var selection = [];
    $('button.board').click(function(event){

      selection = $(this).attr("id").split("-")
      //debugger;
      for(var i=0; i<selection.length; i++){
        selection[i] = parseInt(selection[i]);
      }
      if(game.board[selection[0]][selection[1]]=== 0){
        console.log(selection);
        game.board[selection[0]][selection[1]] = game.turn + 1;
        $("#"+ $(this).attr("id")).text(game.turn+1);
        if (game.checkWin()){
          $('button.board').prop("disabled", true);
          $('#newgame').prop("disabled", false);
          $('#players').prop("disabled", false);
        }else{
          game.toggleTurn();
        }
      }

  });


    //console.log(game.board);

  })
})
