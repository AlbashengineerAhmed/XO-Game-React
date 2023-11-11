import { useContext } from "react";

import { GameContext } from "./context/GameContext";
import Modal from "./components/modal/modal";
import Start from "./components/start/start";
import Board from "./components/board/board";

function App() {
  const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" ? <Start /> : <Board />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
