import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.scss';

const routes = [
  {
    name: 'TicTacToe',
    to: '/tictactoe',
    img: '/assets/tictactoe.gif',
  },
  {
    name: 'Hangman',
    to: '/hangman',
    img: '/assets/hangman.gif',
  },
  {
    name: 'Sudoku',
    to: '/sudoku',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-DnYnXqi3pCCcxkK1rKieJhqEtDZ2WsSysg&usqp=CAU',
  },
];

export default function Home() {
  return (
    <div className="Home">
      <h1 className="Home__title">
        <span role="image">👾</span> Selecciona tu juego{' '}
        <span role="image">👾</span>
      </h1>
      <ul className="Home__list">
        {routes.map(({ name, to, img }) => (
          <li key={to}>
            <Link to={to}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
