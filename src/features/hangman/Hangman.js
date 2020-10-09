import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StartButton from '../../components/StartButton';
import Keyboard from '../../components/Keyboard';

import {
  MAX_LIVES,
  doToggleStart,
  selectHint,
  selectIsStarted,
  doInputLetter,
  selectGuesses,
  selectErrors,
  selectIsWinner,
  selectIsLooser,
} from './hangmanSlice';

import '../../styles/Hangman.scss';

const abecedary = 'abcdefghijklmnñopqrstuvwxyz';

export default function Hangman() {
  const dispatch = useDispatch();

  const isStarted = useSelector(selectIsStarted);
  const hint = useSelector(selectHint);
  const guesses = useSelector(selectGuesses);
  const errors = useSelector(selectErrors);
  const isWinner = useSelector(selectIsWinner);
  const isLooser = useSelector(selectIsLooser);

  return (
    <div className="Hangman">
      <StartButton
        onClick={() => dispatch(doToggleStart())}
        isStarted={isStarted}
      />

      {isStarted ? (
        <div className="Hangman__game">
          {isLooser ? (
            <img
              className="Hangman__loose"
              src="/assets/hanged.png"
              alt="Hanged"
            />
          ) : (
            <>
              {/* ['_', '_', '_'].join(' ') => '_ _ _' */}
              <h2 className="Hangman__hint">
                {isWinner ? hint.join('') : hint.join(' ')}
              </h2>

              {isWinner ? (
                <h3>
                  <span role="img">🎉</span> ¡Has ganado!{' '}
                  <span role="img">🎉</span>
                </h3>
              ) : (
                <Keyboard
                  elements={abecedary}
                  getDisabled={(letter) =>
                    guesses.includes(letter) || errors.includes(letter)
                  }
                  handleClick={(letter) => dispatch(doInputLetter(letter))}
                />
              )}
            </>
          )}

          <div className="Hangman__hearts">
            {Array.from(Array(MAX_LIVES)).map((_, index) => {
              const totalErrors = errors.length;

              return (
                <img
                  style={{
                    filter: index < totalErrors ? 'grayscale(1)' : '',
                  }}
                  key={index}
                  src="/assets/heart.png"
                  alt="Heart"
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
