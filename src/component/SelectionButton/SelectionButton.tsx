import React from "react";

type SelectionProops = {
    image : string
    onClick : () => void
    elName: string
}

const SelectionButton = ({onClick, image, elName}: SelectionProops) => {
  return (
    <div className="game__buttonContainer">
      <div>
        <button className="game__button" onClick={onClick}>
          <img src={image} className="game__selection--image" />
        </button>
      </div>
      <label>{elName}</label>
    </div>
  );
};

export default SelectionButton;
