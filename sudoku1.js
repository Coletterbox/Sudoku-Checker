// "board" is a two dimensional array - contains 9 arrays with contain 9 integers

function checkSolution(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i].slice().sort().join("") !== "123456789") {
      return false;
    }
  }
  var columns = [];
  for (var j = 0; j < board.length; j++) {
    for (var k = 0; k < board[j].length; k++) {
      columns.push(board[k][j]);
    }
  }
  for (var l = 0; l < 9; l++) {
    var number = l * 9;
    var column = columns.slice(number, number + 9);
    if (column.slice().sort().join("") !== "123456789") {
      return false;
    }
  }
  var squares = [];
  for (var n = 0; n < 81; n+=9) {
    squares.push(columns[n+0]);
    squares.push(columns[n+1]);
    squares.push(columns[n+2]);
  }
  for (var n = 3; n < 81; n+=9) {
    squares.push(columns[n+0]);
    squares.push(columns[n+1]);
    squares.push(columns[n+2]);
  }
  for (var n = 6; n < 81; n+=9) {
    squares.push(columns[n+0]);
    squares.push(columns[n+1]);
    squares.push(columns[n+2]);
  }
  var squareArray = [];
  for (var a = 0; a < squares.length; a+=9) {
    squareArray.push(squares.slice(a, a + 9));
  }
  for (var b = 0; b < 9; b++) {
    if (squareArray[b].sort().join("") !== "123456789") {
      return false;
    }
  }
  return true;
}
