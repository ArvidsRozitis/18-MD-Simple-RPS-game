import { useState } from "react";
import rockImage from "../../assets/images/rock.png";
import scissorsImage from "../../assets/images/scissors.png";
import papperImage from "../../assets/images/papper.png";
import SelectionButton from "../../component/SelectionButton/SelectionButton";
import generateComputerChoice from "../../modules/generateComputerChoice";

export const GamePage = () => {
  const [playerWon, setPlayerWon] = useState("");
  type GameElements = {
    title: string;
    beats: GameElements[];
  };
  const elementRock: GameElements = {
    title: "Rock",
    beats: [],
  };
  const elementPapper: GameElements = {
    title: "Paper",
    beats: [],
  };
  const elementScissors: GameElements = {
    title: "Scissors",
    beats: [],
  };
  elementPapper.beats.push(elementRock);
  elementRock.beats.push(elementScissors);
  elementScissors.beats.push(elementPapper);

  const allElements: GameElements[] = [
    elementRock,
    elementScissors,
    elementPapper,
  ];

  const selectionHangler = (playerChoice: GameElements) => {
    console.log("player", playerChoice);
    const pcChoice = generateComputerChoice(allElements);
    if (pcChoice === playerChoice) {
      console.log("It's a draw");
      setPlayerWon("It's a draw");
    } else if (playerChoice.beats.includes(pcChoice)) {
      console.log("You won!");
      setPlayerWon("You won!");
    } else {
      setPlayerWon("You lose!");
      console.log("You lose!");
    }
  };

  return (
    <>
      <div>
        <h1>GamePage</h1>
      </div>
      <div>
        <SelectionButton
          image={rockImage}
          onClick={() => selectionHangler(elementRock)}
          elName={elementRock.title}
        />
        <SelectionButton
          image={scissorsImage}
          onClick={() => selectionHangler(elementScissors)}
          elName={elementScissors.title}
        />
        <SelectionButton
          image={papperImage}
          onClick={() => selectionHangler(elementPapper)}
          elName={elementPapper.title}
        />
      </div>
      <h1>{playerWon}</h1>
    </>
  );
};

export default GamePage;

//if elements draw
// check if your element is beter thatn
