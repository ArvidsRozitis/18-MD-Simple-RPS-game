import { useTranslation } from "react-i18next";

type RoundsWon = {
    roundsWon: number
}

const ResulOfTheMach = ({roundsWon}: RoundsWon) => {
    const { t } = useTranslation();
    
    if (roundsWon === 5) {
      return <h1 className="h1">{t("You won the game!")}</h1>;
    } else {
      return <h1 className="h1">{t("You lost the game!")}</h1>;
    }
  };

  export default ResulOfTheMach