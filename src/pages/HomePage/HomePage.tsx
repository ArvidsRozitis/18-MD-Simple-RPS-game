import { useTranslation, Trans } from "react-i18next";
import descriptionText from "../../assets/texts/description";
const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="home_container">
      <h1 className="h1__description">
        <Trans i18nKey="homeDescription.description">{descriptionText}</Trans>
      </h1>
    </div>
  );
};

export default HomePage;
