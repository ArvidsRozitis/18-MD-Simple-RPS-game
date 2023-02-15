import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ResulOfTheMach from "../ResulOfTheMach/ResulOfTheMach";

type RoundProps = {
  roundsWon: number;
  roundsLost: number;
};

const MachEndModal = ({ roundsWon, roundsLost }: RoundProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const submitHanlder = () => {
    navigate(`/`);
  };

  return (
    <div className="modal">
      <div className="results__container">
        <ResulOfTheMach roundsWon={roundsWon} />
        <div>
          <h2 className="h2">
            {t("rounds won")}: {roundsWon}
          </h2>
        </div>
        <div>
          <h2 className="h2">
            {t("rounds lost")}: {roundsLost}
          </h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHanlder();
          }}
          className="results__form"
        >
          <label>
            {t("write your name")}
            <input type="text" className="results__input" />
          </label>
          <button>{t("submit your score")}</button>
        </form>
      </div>
    </div>
  );
};

export default MachEndModal;
