import style from "./HomeData.module.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

export default function HomeData() {
    const { t } = useTranslation("global");

    return (
        <div className={style.container}>
            <div className={style.language}>
                <LanguageSelector />
            </div>
            <Title />
            <p className={style.soon}>{t("home.homeData.soon")}</p>
            <Link to="/menu" className={style.link}>
                {t("homeView.homeData.link")}
            </Link>
        </div>
    );
}
