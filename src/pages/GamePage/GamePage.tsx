import { useState } from "react";
import rockImage from "../../assets/images/rock.png";
import scissorsImage from "../../assets/images/scissors.png";
import papperImage from "../../assets/images/papper.png";
import questionImage from "../../assets/images/question.png";
import SelectionButton from "../../component/SelectionButton/SelectionButton";
import generateComputerChoice from "../../modules/generateComputerChoice";

export const GamePage = () => {
  const [playerWon, setPlayerWon] = useState("");
  const [pcSelection, setPcSelection] = useState(questionImage);
  const [roundWon, setRoundWon] = useState(0);
  const [roundLost, setRoudLost] = useState(0);
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
    if (pcChoice === elementPapper) {
      setPcSelection(papperImage);
    } else if (pcChoice === elementRock) {
      setPcSelection(rockImage);
    } else {
      setPcSelection(scissorsImage);
    }

    if (pcChoice === playerChoice) {
      console.log("It's a draw");
      setPlayerWon("It's a draw");
    } else if (playerChoice.beats.includes(pcChoice)) {
      console.log("You won!");
      setPlayerWon("You won!");
      setRoundWon(roundWon + 1);
    } else {
      setPlayerWon("You lose!");
      setRoudLost(roundLost + 1);
      console.log("You lose!");
    }
  };

  return (
    <>
      <div>
        <h1 className="h1">I want to play a game.</h1>
      </div>
      <section className="game__section">
        <div className="player__choices">
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
        <div>
          <div>
            <img src={pcSelection} className="pc__selection--image" />
          </div>
        </div>
      </section>
      <h1>{playerWon}</h1>
      <h2 className="h2">rounds won:{roundWon}</h2>
      <h2 className="h2">rounds lost:{roundLost}</h2>
    </>
  );
};

export default GamePage;

//if elements draw
// check if your element is beter thatn
