import React, { useContext } from "react";

import { GameContext } from "../../context/GameContext";
import X_icon from "../icons/X_icon";
import O_icon from "../icons/O_icon";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start__header">
        <X_icon />
        <O_icon />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick player 1'st mark</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <X_icon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <O_icon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light text-normal">remember: x goes first</p>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow" onClick={() => handleStart("cpu")}>
          new game (vs CPU)
        </button>
        <button className="btn btn-blue" onClick={() => handleStart("user")}>
          {" "}
          new game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default Start;
