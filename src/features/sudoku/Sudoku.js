import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';


import {
    doToggleStart, 
    doGenerateSudoku,
    selectIsStarted,
    selectSudoku,
    selectSolution,
    selectShowSolution,
    selectCurrentIndex,
    selectShowKeyboard,
    doShowSolution, 
    doSetSudoku,
    doTogglekeyboard} from './sudokuSlice';


import StartButton from '../../components/StartButton';
import Keyboard from '../../components/Keyboard';
import '../../styles/Sudoku.scss';


export default function Sudoku() {
  const dispatch = useDispatch();


  const isStarted = useSelector(selectIsStarted);
  const sudoku = useSelector(selectSudoku);
  const solution = useSelector(selectSolution);
  const currentIndex = useSelector(selectCurrentIndex);
  const showKeyboard = useSelector(selectShowKeyboard);


  const board = useSelector(selectShowSolution) ? solution : sudoku;


  useEffect(() => {
    if(isStarted){
      dispatch(doGenerateSudoku());
    }
  }, [isStarted]);

  return (
    <div className="Sudoku"> 
       <StartButton
        onClick={() => dispatch(doToggleStart())}
        isStarted={isStarted}
      />
      {isStarted?
      <div>

        <div className="Sudoku__board">
          {board.map((cell, index) => (
            <button key={index}
              onClick={() =>{
                dispatch(doTogglekeyboard(index));
              }}>
              {cell}
            </button>
          ))}
        </div>
        {showKeyboard ? (
        <Keyboard
          elements={'0123456789'}
          handleClick={(num) => {
            //sudoku[currentIndex] = num;
            const newSudoku = sudoku.map((cell, index) =>
              index === currentIndex ? num : cell
            );

            //setSudoku(newSudoku);
            dispatch(doSetSudoku(newSudoku));
            //setShowKeyboard(false);
            dispatch(doTogglekeyboard());
            //setCurrentIndex(null);
          }}
        />
      ) : null}

        <div className="Sudoku__btn">
          <button onClick={() => dispatch(doShowSolution(true))}>Show solution</button>
          <button
            onClick={() => {
              dispatch(doGenerateSudoku());
              dispatch(doShowSolution(false))
            }}>
            Start again
          </button>
        </div>
        
      </div>: null}
      
    </div>
  )
}