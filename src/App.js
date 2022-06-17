import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import "./styles/root.css";
function App() {
  const [pl1, setPl1] = useState("");
  const [pl2, setPl2] = useState("");
  const [startgame, setStartGame] = useState(true);
  const handlepl1 = (e) => {
    setPl1(e.target.value);
  };
  
  const handlepl2 = (e) => {
    setPl2(e.target.value);
  };
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [user, setUser] = useState(false);
  console.log(board);
  const player=()=>{
    if(user){
        return `chance of player ${pl1}`
    }
     return `chance of player ${pl2}`
}
const won=()=>{
return `winner is ${winner}`
}

  const handleSquare = (position) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (position === pos) {
          return user ? "X" : "0";
        }
        return square;
      });
    });
    setUser((prev) => !prev);
  };
 
  const winner = calculateWinner(board);
  
 
  const handleSubmit = () => {
    setStartGame(false);
  };
  const moveLeft= board.every((Element)=>Element!==null)
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      {startgame ? (
        <div className="info">
        <div className="inp1">
          <label htmlFor="player1">name for player using "x"</label>
          <input
            type="text"
            className="player1"
            value={pl1}
            onChange={handlepl1}
          />
          </div>
          <div className="inp2">
          <label htmlFor="player2">name for player using "0"</label>
          <input
            type="text"
            className="player2"
            value={pl2}
            onChange={handlepl2}
          />
          </div>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      ) : (<div>
        <p> {winner && won()}
        {!winner && !moveLeft && player()}
        {!winner && moveLeft  && "match tied"}
        </p>
                <Board board={board} handleSquare={handleSquare} />
        </div>
      )}
    </div>
  );
}

export default App;
