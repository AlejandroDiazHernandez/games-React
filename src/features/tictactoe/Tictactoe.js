import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsStarted,
  selectActualPlayer,
  doToggleStart,
  doPlayTurn,
  selectBoard,
  selectWinner,
} from './tictactoeSlice';

import '../../styles/Tictactoe.scss';
import StartButton from '../../components/StartButton';

export default function Tictactoe() {
  const dispatch = useDispatch();

  const isStarted = useSelector(selectIsStarted);
  const actualPlayer = useSelector(selectActualPlayer);
  const board = useSelector(selectBoard);
  const winner = useSelector(selectWinner);

  return (
    <div className="Tictactoe">
      <StartButton
        onClick={() => dispatch(doToggleStart())}
        isStarted={isStarted}
      />

      {isStarted && winner ? (
        <div>
          <h3 className="Tictactoe__turns">
            <span role="img">🎉</span> Ha ganado {winner}{' '}
            <span role="img">🎉</span>
          </h3>
        </div>
      ) : null}

      {isStarted && !winner ? (
        <div>
          <h3 className="Tictactoe__turns">Es el turno de {actualPlayer}</h3>

          <div className="Tictactoe__board">
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className="Tictactoe__row">
                {row.map((cell, cellIndex) => (
                  <button
                    className="Tictactoe__cell"
                    key={cellIndex}
                    // En caso de que la celda tenga valor o haya ganador, no puedo pulsar los botones
                    disabled={Boolean(cell) || Boolean(winner)}
                    onClick={() =>
                      dispatch(
                        doPlayTurn({
                          actualPlayer,
                          rowIndex,
                          cellIndex,
                        })
                      )
                    }
                  >
                    {cell || '-'}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
