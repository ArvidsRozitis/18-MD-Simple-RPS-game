import { Trans } from "react-i18next";

export const ScoreList = () => {
  return (
    <div>
      <div className="table__container">
        <table className="table table__scores">
          <thead>
            <tr>
              <th className="table__head-cell"><Trans i18nKey="scoreBoard.Player">{"Player"}</Trans></th>
              <th className="table__head-cell"><Trans i18nKey="scoreBoard.Gammes won">{"Gammes won"}</Trans></th>
              <th className="table__head-cell"><Trans i18nKey="scoreBoard.rounds w/l">{"rounds w/l"}</Trans></th>
              <th className="table__head-cell"><Trans i18nKey="scoreBoard.Last played">{"Last played"}</Trans></th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__content-row">
              <td className="table__content-cell">EENA</td>
              <td className="table__content-cell">10</td>
              <td className="table__content-cell">50/20</td>
              <td className="table__content-cell">2022:11:21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreList;
