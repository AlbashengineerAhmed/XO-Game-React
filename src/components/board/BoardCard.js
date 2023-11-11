import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import O_icon from "../icons/O_icon";
import X_icon from "../icons/X_icon";

const BoardCard = ({ active, user = "nouser", index }) => {
  const { handleSquareClick } = useContext(GameContext);
  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${active ? "active" : "shadow-gray"}`}
      onClick={() => handleSquareClick(index)}
    >
      {user === "x" && <X_icon color={active && "dark"} size="lg" />}
      {user === "o" && <O_icon color={active && "dark"} size="lg" />}
    </div>
  );
};

export default BoardCard;
