import { Trans } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ScoreList = () => {
  type Scrore = {
    playerName: string;
    roundsWon: number;
    roundsLost: number;
    gamesWon: number;
  };


  const { data, isLoading } = useQuery<Scrore[]>({
    queryKey: ["scores"],
    queryFn: getscoresData,
  });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (!data) {
    throw Error("something went wrong!");
  }

  return (
    <div>
      <div className="table__container">
        <table className="table table__scores">
          <thead>
            <tr>
              <th className="table__head-cell">
                <Trans i18nKey="scoreBoard.Player">{"Player"}</Trans>
              </th>
              <th className="table__head-cell">
                <Trans i18nKey="scoreBoard.Gammes won">{"Gammes won"}</Trans>
              </th>
              <th className="table__head-cell">
                <Trans i18nKey="scoreBoard.rounds w/l">{"rounds w/l"}</Trans>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data: Scrore) => (
              <tr className="table__content-row" key={Math.random()}>
                <td className="table__content-cell">{data.playerName}</td>
                <td className="table__content-cell table__content-cell--middle">
                  {data.gamesWon}
                </td>
                <td className="table__content-cell">
                  {data.roundsWon}/{data.roundsLost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreList;

const getscoresData = () => {
  return axios.get("http://localhost:3004/scores").then((res) => res.data);
};
