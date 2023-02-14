type GameElements = {
    title: string;
    beats: GameElements[];
  };

const generateComputerChoice = (elements: GameElements[]) => {
    const pcSelection =
    elements[Math.floor(Math.random() * elements.length)];
    console.log("pc", pcSelection);
    return pcSelection;
  };

export default generateComputerChoice