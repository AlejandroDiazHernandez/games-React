import React, { useState, useEffect } from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';

import Keyboard from './Keyboard';

import '../styles/Sudoku.scss';

export default function Sudoku() {
  const [sudoku, setSudoku] = useState([]);
  const [solution, setSolution] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  function generateSudoku() {
    const puzzle = makepuzzle();
    const solve = solvepuzzle(puzzle);

    setSudoku(puzzle);
    setSolution(solve);
  }

  useEffect(() => {
    generateSudoku();
  }, []);

  const board = showSolution ? solution : sudoku;

  return (
    <div className="Sudoku">
      <h3>Sudoku</h3>
      <div className="Sudoku__board">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => {
              setShowKeyboard(true);
              setCurrentIndex(index); // Guardo el indice de la celda en el currentIndex
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      <button onClick={() => setShowSolution(true)}>Show solution</button>
      <button
        onClick={() => {
          generateSudoku();
          setShowSolution(false);
        }}
      >
        Start again
      </button>

      {showKeyboard ? (
        <Keyboard
          elements={'0123456789'}
          handleClick={(num) => {
            const newSudoku = sudoku.map((cell, index) =>
              index === currentIndex ? num : cell
            );

            setSudoku(newSudoku);
            setShowKeyboard(false);
            setCurrentIndex(null);
          }}
        />
      ) : null}
    </div>
  );
}
