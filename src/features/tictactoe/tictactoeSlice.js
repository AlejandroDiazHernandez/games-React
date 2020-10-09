import { createSlice } from '@reduxjs/toolkit';

import { checkWinner } from './checkWinner';

const PLAYER_1 = 'P1';
const PLAYER_2 = 'P2';

export const tictactoeSliceName = 'tictactoe';
const tictactoeSlice = createSlice({
  name: tictactoeSliceName,
  initialState: {
    isStarted: false,
    actualPlayer: PLAYER_1,
    winner: null,
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  },
  reducers: {
    doToggleStart: (state) => {
      state.isStarted = !state.isStarted;

      // Si el juego está empezado y lo terminamos, volvemos a poner el estado inicial
      if (state.isStarted) {
        state.actualPlayer = PLAYER_1;
        state.winner = null;
        state.board = [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ];
      }
    },
    doPlayTurn: (state, action) => {
      const { actualPlayer, rowIndex, cellIndex } = action.payload;
      const symbol = actualPlayer === PLAYER_1 ? 'X' : 'O';
      state.board[rowIndex][cellIndex] = symbol;

      const winner = checkWinner(state.board);
      if (winner) {
        const winnerPlayer = winner === 'X' ? PLAYER_1 : PLAYER_2;
        state.winner = winnerPlayer;
      } else {
        state.actualPlayer = actualPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
      }
    },
  },
});

// Cada reducer se convierte en una acción y puedo exportarla
export const { doToggleStart, doPlayTurn } = tictactoeSlice.actions;

export const selectIsStarted = (state) => state[tictactoeSliceName].isStarted;
export const selectActualPlayer = (state) =>
  state[tictactoeSliceName].actualPlayer;
export const selectBoard = (state) => state[tictactoeSliceName].board;
export const selectWinner = (state) => state[tictactoeSliceName].winner;

export default tictactoeSlice.reducer;
