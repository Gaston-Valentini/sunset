import style from "./HomeData.module.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import instagram from "../../assets/icons/instagram.png";

export default function HomeData() {
    const { t } = useTranslation("global");

    return (
        <div className={style.container}>
            <div className={style.language}>
                <LanguageSelector />
            </div>
            <Title />
            <p className={style.soon}>{t("homeView.homeData.soon")}</p>
            <Link to="/menu" className={style.link}>
                {t("homeView.homeData.link")}
            </Link>
            <a href="https://www.instagram.com/sunset_cala/" target="_blank" className={style.social}>
                <p className={style.socialText}>{t("homeView.homeData.social")}</p>
                <div className={style.socialIcon}>
                    <img src={instagram} />
                </div>
            </a>
        </div>
    );
}
