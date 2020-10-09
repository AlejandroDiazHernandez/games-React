import { configureStore } from '@reduxjs/toolkit';

import tictactoeReducer, {
  tictactoeSliceName,
} from '../features/tictactoe/tictactoeSlice';

import hangmanReducer, {
  hangmanSliceName,
} from '../features/hangman/hangmanSlice';

import sudokuReducer, {
  sudokuSliceName,
}from '../features/sudoku/sudokuSlice';

export default configureStore({
  reducer: {
    [tictactoeSliceName]: tictactoeReducer,
    [hangmanSliceName]: hangmanReducer,
    [sudokuSliceName]: sudokuReducer,
  },
});
