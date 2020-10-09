export function checkWinner(board) {
  let winner = null;

  // Comprobamos ganador en horizontales
  for (let row of board) {
    if (row[0] !== null && row[0] === row[1] && row[1] === row[2]) {
      winner = row[0];
      break;
    }
  }

  // Si hay ganador en las filas, me salgo de la función y devuelvo el símbolo ganador
  if (winner) {
    return winner;
  }

  // Chequeamos las columnas
  if (
    board[0][0] !== null &&
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0]
  ) {
    winner = board[0][0];
    return winner;
  }
  if (
    board[0][1] !== null &&
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1]
  ) {
    winner = board[0][1];
    return winner;
  }
  if (
    board[0][2] !== null &&
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2]
  ) {
    winner = board[0][2];
    return winner;
  }

  // Chequeamos las diagonales
  if (
    board[0][0] !== null &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    winner = board[0][0];
    return winner;
  }
  if (
    board[0][2] !== null &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    winner = board[0][2];
    return winner;
  }

  return null;
}
