import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./TicTacToe.css";
import FancyButton from "../small/FancyButton";

const Square = ({ value, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className="square">
      {value}
    </div>
  );
};
Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", ""]),
  onClick: PropTypes.func,
};

const WinnerCard = ({ show, winner, onRestart = () => {} }) => {
  return (
    <div className={cx("winner-card", { "winner-card--hidden": !show })}>
      <span className="winner-card-text">
        {winner ? `Player ${winner} has won the game!` : "It's a tie!"}
      </span>
      <FancyButton onClick={onRestart}>Play again?</FancyButton>
    </div>
  );
};

WinnerCard.propTypes = {
  show: PropTypes.bool.isRequired,
  winner: PropTypes.oneOf(["X", "O"]),
  onRestart: PropTypes.func,
};

const getWinner = (tiles) => {
  if (tiles[0] === tiles[1] && tiles[0] === tiles[2]) {
    return tiles[0];
  } else if (tiles[3] === tiles[4] && tiles[3] === tiles[5]) {
    return tiles[3];
  } else if (tiles[6] === tiles[7] && tiles[6] === tiles[8]) {
    return tiles[6];
  } else if (tiles[0] === tiles[3] && tiles[0] === tiles[6]) {
    return tiles[0];
  } else if (tiles[1] === tiles[4] && tiles[1] === tiles[7]) {
    return tiles[1];
  } else if (tiles[2] === tiles[5] && tiles[2] === tiles[8]) {
    return tiles[2];
  } else if (tiles[0] === tiles[4] && tiles[0] === tiles[8]) {
    return tiles[0];
  } else if (tiles[2] === tiles[4] && tiles[2] === tiles[6]) {
    return tiles[2];
  } else {
    return null;
  }
};

const useTicTacToeGameState = (initialPlayer) => {
  const emptyTiles = Array.from({ length: 9 });
  const [tiles, setTiles] = useState(emptyTiles);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const winner = getWinner(tiles);
  const gameEnded = !!winner;

  const changeCurrentPlayer = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  const setTileTo = (tileIndex, player) => {
    if (!!tiles[tileIndex]) return;
    const newTiles = [...tiles];
    newTiles[tileIndex] = player;
    setTiles(newTiles);
    changeCurrentPlayer();
  };

  const restart = () => {
    setTiles(emptyTiles);
  };

  return { tiles, currentPlayer, winner, gameEnded, setTileTo, restart };
};

const TicTacToe = () => {
  const { tiles, currentPlayer, winner, gameEnded, setTileTo, restart } =
    useTicTacToeGameState("X");
  return (
    <div className="tictactoe">
      <WinnerCard show={gameEnded} winner={winner} onRestart={restart} />
      <div className="tictactoe-row">
        <Square value={tiles[0]} onClick={() => setTileTo(0, currentPlayer)} />
        <Square value={tiles[1]} onClick={() => setTileTo(1, currentPlayer)} />
        <Square value={tiles[2]} onClick={() => setTileTo(2, currentPlayer)} />
      </div>
      <div className="tictactoe-row">
        <Square value={tiles[3]} onClick={() => setTileTo(3, currentPlayer)} />
        <Square value={tiles[4]} onClick={() => setTileTo(4, currentPlayer)} />
        <Square value={tiles[5]} onClick={() => setTileTo(5, currentPlayer)} />
      </div>
      <div className="tictactoe-row">
        <Square value={tiles[6]} onClick={() => setTileTo(6, currentPlayer)} />
        <Square value={tiles[7]} onClick={() => setTileTo(7, currentPlayer)} />
        <Square value={tiles[8]} onClick={() => setTileTo(8, currentPlayer)} />
      </div>
    </div>
  );
};
export default TicTacToe;
