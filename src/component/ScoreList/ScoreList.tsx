import { Trans } from "react-i18next";

export const ScoreList = () => {
  type Scrore = {
    player: string;
    roundsWon: number;
    roundsLost: number;
    gamesWon: number;
  };
  const userScoresX = [
    {
      player: "EENA",
      roundsWon: 1,
      roundsLost: 5,
      gamesWon: 0,
    },
    {
      player: "Amirus",
      roundsWon: 15,
      roundsLost: 6,
      gamesWon: 3,
    },
  ];

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
            {userScoresX.map((data: Scrore) => (
              <tr className="table__content-row">
                <td className="table__content-cell">{data.player}</td>
                <td className="table__content-cell table__content-cell--middle">{data.gamesWon}</td>
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
