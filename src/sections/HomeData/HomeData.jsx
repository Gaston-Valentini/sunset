import style from "./HomeData.module.css";
import { useTranslation } from "react-i18next";
import flagSpain from "../../assets/flags/flag-spain.png";
import flagEngland from "../../assets/flags/flag-england.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomeData() {
    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState("es");

    const handleLanguage = (e) => {
        const { value } = e.target;
        setLanguage(value);
        i18n.changeLanguage(value);
    };

    return (
        <div className={style.container}>
            <p className={style.title}>SUNSET</p>
            <div className={style.language}>
                <div className={style.languageFlag}>
                    {language === "es" && <img src={flagSpain} />}
                    {language === "en" && <img src={flagEngland} />}
                </div>
                <select className={style.languageSelector} onChange={(e) => handleLanguage(e)}>
                    <option hidden>{t("home.homeData.language")}</option>
                    {language === "es" && <option value="en">{t("home.homeData.languageEn")}</option>}
                    {language === "en" && <option value="es">{t("home.homeData.languageEs")}</option>}
                </select>
            </div>
            <p className={style.soon}>{t("home.homeData.soon")}</p>
            <Link to="/menu" className={style.link}>
                {t("home.homeData.link")}
            </Link>
        </div>
    );
}
