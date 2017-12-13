window.onload =function() {
    
    var player1;
    var player2;
    var player1Turn = "off";
    var player2Turn = "off";
    var moves = ["","","","","","","","",""];
    
    //FUNCTION SELECT PLAYER
    var playX = document.getElementsByClassName('cross')[0];
    var playO = document.getElementsByClassName('circle')[0];
    
    function selectPlayer(symbol){
        var option = document.getElementById('option');
        option.style.display = "none";
        
        var selection = document.getElementsByClassName('selection');
        selection[0].classList.add('deleteOption');
        
        if(symbol==='X') {
            player1 = 'X';
            player2 = 'O';
        } else {
            player1= 'O';
            player2= 'X';
        }
        
        console.log(player2);
    }
    
    //GET CLICKED ELEMENT
    function clickHandler(elem) {
        elem.addEventListener('click', function() {
            var elementClass = this.className;
            if(elementClass === 'cross') {
                selectPlayer('X');
            } else {
                selectPlayer('O');
            } 
        });
    }
    clickHandler(playX); 
    clickHandler(playO);
    
    //FUNCTION TOGGLE ACTIVE CLASS WHEN PLAY BUTTON CLICKED
    var playBtn = document.getElementById('play');
    playBtn.addEventListener('click', function() {
        playBtn.style.display = "none";
        if(player1==='X'){
            playX.classList.add('active');
            markSquares(player1);
        } else {
            playO.classList.add('active');
            markSquares(player2);
        }
    });
    
    //MARK THE SQUARES
    function markSquares(player) {
        
        var squares = document.getElementsByClassName('square');
            for (var i=0; i<squares.length; i++) {
                squares[i].addEventListener('click', clickResponse, false);
            }
            
        function clickResponse() {
            var squareID = (this.id);
            this.classList.add('marked');
            if(player1==='X') {
                this.innerHTML = "<i class='fa fa-times'></i>";
                playerMoves(squareID);
                } else {
                this.innerHTML = "<i class='fa fa-circle-o'></i>";
                playerMoves(squareID);
            }
        }     
    } 
    
    //Detect the player moves
    function playerMoves(id) {
        var index = id.split('').pop();
        if(moves.length<=9 && moves[index-1]===""){
            moves.splice(index-1, 1, player1);
            console.log(moves);
            winning(moves);
        } else {
            console.log('full');
        }
    }
}

//Winning state
function winning(moves) {
    //Check rows
    for(var i=0; i<=6; i= i + 3) {
        if(moves[i] !== "" && moves[i] === moves[i+1] && moves[i+1] === moves[i+2]) {
            console.log('You won');
        }
    }
    
    //Check columns
    for(var i=0; i<=2; i++) {
        if(moves[i] !== "" && moves[i] === moves [i+3] && moves[i+3] === moves[i+6]) {
            console.log(moves[i] + " won");
        }
    }
    
    //Check diagonals
    for(var i=0,j=4 ; i<=2; i=i+2, j=j-2) {
        if(moves[i] !== "" && moves[i] === moves[i+j] && moves[i+j] === moves[i+j*2]) {
            console.log('You won');
        }
    }
    
    if(moves.indexOf("")===-1) {
        console.log('draw');
    }
}




//window.onload = function() {
//    //Check if user choose X or O
//    var user;
//    var ex = document.getElementById('cross');
//    var oh = document.getElementById('circle');
//    var exIcon = "<i class='fa fa-times'></i>";
//    var ohIcon = "<i class='fa fa-circle-o'></i>";
//    var gameBoard = document.getElementById('gameboard');
//    
//    function player(symbol, user, newClass, icon) {
//        symbol.onclick = function() {
//        gameBoard.className += 'exCursor';
//        user = 'user';
//
//        //Check which square has been clicked
//        var squares = document.getElementsByClassName('square');
//        for (var i=0; i<squares.length; i++) {
//            squares[i].addEventListener('click', clickResponse, false);
//        }
//
//        function clickResponse() {
//          var squareID = (this.id);
//          this.classList.add(newClass);
//          this.innerHTML = icon; 
//        }
//            
//        }
//    }
//    
//  player(ex, 'userX', 'exClass', exIcon);
//  player(oh, 'userO', 'ohClass', ohIcon);
//    ex.onclick = function() {
//    gameBoard.className += 'exCursor';
//    user = 'user-X';
//    
//    //Check which square has been clicked
//    var squares = document.getElementsByClassName('square');
//    for (var i=0; i<squares.length; i++) {
//        squares[i].addEventListener('click', clickResponse, false);
//    }
//        
//    function clickResponse() {
//       //if(user = 'X') {
//          var squareID = (this.id);
//          this.classList.add('ex');
//          this.innerHTML = "<i class='fa fa-times'></i>"; 
//       //}
//    }
//    }
//    
//    oh.onclick = function() {
//    gameBoard.className += 'exCursor';
//    user = 'user-O';
//    
//    //Check which square has been clicked
//    var squares = document.getElementsByClassName('square');
//    for (var i=0; i<squares.length; i++) {
//        squares[i].addEventListener('click', clickResponse, false);
//    }
//        
//    function clickResponse() {
//       //if(user = 'X') {
//          var squareID = (this.id);
//          this.classList.add('oh');
//          this.innerHTML = "<i class='fa fa-circle-o'></i>"; 
//       //}
//    }
//    }
    
//}
    
