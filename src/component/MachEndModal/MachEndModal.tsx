import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ResulOfTheMach from "../ResulOfTheMach/ResulOfTheMach";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type RoundProps = {
  roundsWon: number;
  roundsLost: number;
};

type UsersScrore = {
  playerName: string;
  roundsWon: number;
  roundsLost: number;
  gamesWon: number;
};

const MachEndModal = ({ roundsWon, roundsLost }: RoundProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [username, setUserName] = useState("");

  const submitHanlder = () => {
    navigate(`/`);
    updateScoresData(roundsWon, roundsLost, username);
    setTimeout(() => {
      queryClient.invalidateQueries();
    }, 1000);
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
            <input
              type="text"
              className="results__input"
              required
              onChange={(e) => {
                e.preventDefault();
                setUserName(e.target.value);
              }}
            />
          </label>
          <button>{t("submit your score")}</button>
        </form>
      </div>
    </div>
  );
};

export default MachEndModal;

const updateScoresData = (
  roundsWon: number,
  roundsLost: number,
  username: string
) => {
  axios.get("http://localhost:3004/scores").then(({ data }) => {
    if (data.find((user: UsersScrore) => user.playerName === username)) {
      const findPlayer = data.find(
        (user: UsersScrore) => user.playerName === username
      );
      const foundPlayerId: number = findPlayer.id;
      const foundPlayerRoundsWon: number = findPlayer.roundsWon + roundsWon;
      const foundPlayerRoundsLose: number = findPlayer.roundsLost + roundsLost;
      const foundPlayerGamesWon: number = findPlayer.gamesWon + (roundsWon > roundsLost ? 1 : 0);
      axios.put(`http://localhost:3004/scores/put/${foundPlayerId}`, {
        roundsWon: foundPlayerRoundsWon,
        roundsLost: foundPlayerRoundsLose,
        gamesWon: foundPlayerGamesWon,
      });
    } else {
      axios.post(`http://localhost:3004/scores/post`, {
        playerName: username,
        roundsWon: roundsWon,
        roundsLost: roundsLost,
        gamesWon: roundsWon > roundsLost ? 1 : 0,
      });
    }
  });
};
