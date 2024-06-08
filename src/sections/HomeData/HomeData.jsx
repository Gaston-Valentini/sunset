import style from "./HomeData.module.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { Link } from "react-router-dom";

export default function HomeData() {
    const { t } = useTranslation("global");

    return (
        <div className={style.container}>
            <p className={style.title}>SUNSET</p>
            <div className={style.language}>
                <LanguageSelector />
            </div>
            <p className={style.soon}>{t("home.homeData.soon")}</p>
            <Link to="/menu" className={style.link}>
                {t("home.homeData.link")}
            </Link>
        </div>
    );
}
