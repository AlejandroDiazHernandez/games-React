import { createSlice } from '@reduxjs/toolkit';

import { wordsList } from './wordsList';

export const MAX_LIVES = 6;

export const hangmanSliceName = 'hangman';
const hangmanSlice = createSlice({
  name: hangmanSliceName,
  initialState: {
    isStarted: false,
    isWinner: false,
    isLooser: false,
    word: '',
    hint: [],
    guesses: [],
    errors: [],
  },
  reducers: {
    doToggleStart: (state) => {
      // Si el juego está empezado y lo terminamos, volvemos a poner el estado inicial
      if (state.isStarted) {
        state.isWinner = false;
        state.isLooser = false;
        state.word = '';
        state.hint = [];
        state.guesses = [];
        state.errors = [];
      } else {
        // Generamos un número de 0 hasta el último elemento del array
        const random = Math.floor(Math.random() * wordsList.length);
        const word = wordsList[random];

        state.word = word;
        state.hint = word.split('').map(() => '_');
      }

      state.isStarted = !state.isStarted;
    },
    doInputLetter: (state, action) => {
      const letter = action.payload;

      // Chequeamos si la letra que el usuario envía está en la palabra (word)
      const hasLetter = state.word.includes(letter);

      if (hasLetter) {
        for (let i = 0; i < state.hint.length; i++) {
          const letterInPosition = state.word[i];

          // Si la letra en la posición está en la palabra, la metemos en la pista
          if (letterInPosition.toLowerCase() === letter.toLowerCase()) {
            state.hint[i] = letter;
          }
        }

        state.guesses.push(letter);
        // Si la pista ya es como la palabra, se ha ganado la partida
        if (state.hint.join('') === state.word) {
          state.isWinner = true;
        }
      } else {
        state.errors.push(letter);

        if (state.errors.length >= MAX_LIVES) {
          state.isLooser = true;
        }
      }

      // Método alternativo
      // state.hint = state.hint.map((_, i) =>
      //   state.word[i] === letter ? letter : _
      // );
    },
  },
});

export const { doToggleStart, doInputLetter } = hangmanSlice.actions;

// Selectors
export const selectIsStarted = (state) => state[hangmanSliceName].isStarted;
export const selectWord = (state) => state[hangmanSliceName].word;
export const selectHint = (state) => state[hangmanSliceName].hint;
export const selectGuesses = (state) => state[hangmanSliceName].guesses;
export const selectErrors = (state) => state[hangmanSliceName].errors;
export const selectIsWinner = (state) => state[hangmanSliceName].isWinner;
export const selectIsLooser = (state) => state[hangmanSliceName].isLooser;

export default hangmanSlice.reducer;
