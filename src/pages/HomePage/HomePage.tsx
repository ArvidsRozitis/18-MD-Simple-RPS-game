import { Trans } from "react-i18next";
import descriptionText from "../../assets/texts/description";
import ScoreList from "../../component/ScoreList/ScoreList";

const HomePage = () => {

  return (
    <div className="home_container">
      <h1 className="h1__description">
        <Trans i18nKey="homeDescription.description">{descriptionText}</Trans>
      </h1>
      <div>
        <ScoreList />
      </div>
    </div>
  );
};

export default HomePage;
