import { createSlice } from "@reduxjs/toolkit";
import { makepuzzle, solvepuzzle } from "sudoku";

export const sudokuSliceName = "sudoku";
const sudokuSlice = createSlice({
  name: sudokuSliceName,
  initialState: {
    isStarted: false,
    sudoku: [],
    solution: [],
    board:[],
    showSolution: false,
    showKeyboard: false,
    currentIndex: null,
  },
  reducers: {
    doToggleStart: (state) => {
    state.isStarted = !state.isStarted;
    // Si el juego está empezado y lo terminamos, volvemos a poner el estado inicial
    if (state.isStarted) {
    state.board = [];
    state.sudoku = [];
    state.solution = [];
    state.showSolution = false;
    state.showKeyboard = false;
    state.currentIndex = null;
    }
    },
    doGenerateSudoku: (state, action) => {
    const puzzle = makepuzzle();
    const solve = solvepuzzle(puzzle);
    state.sudoku = puzzle;
    state.solution = solve;
    },
    doShowSolution: (state, action) => {
    state.showSolution = action.payload;
    },
    doSetSudoku: (state, action) => {
    state.sudoku = action.payload;
    },
    /* doTogglekeyboard: (state, action) => {
    const { showKeyboard, currentIndex } = action.payload;
    
    state.showKeyboard = showKeyboard;
    state.currentIndex = currentIndex;
    }, */
    doTogglekeyboard: (state, action) => {
      state.showKeyboard = !state.showKeyboard;
      
      const currentIndex = action.payload;
      state.currentIndex = currentIndex;
    }
    },
   });



export const { doToggleStart, doGenerateSudoku, doShowSolution, doSetSudoku, doTogglekeyboard } = sudokuSlice.actions;
 
// Selectors
export const selectIsStarted = (state) => state[sudokuSliceName].isStarted;
export const selectSudoku = (state) => state[sudokuSliceName].sudoku;
export const selectSolution = (state) => state[sudokuSliceName].solution;
export const selectShowSolution = (state) => state[sudokuSliceName].showSolution;
export const selectCurrentIndex = (state) => state[sudokuSliceName].currentIndex;
export const selectShowKeyboard = (state) => state[sudokuSliceName].showKeyboard;


export default sudokuSlice.reducer;