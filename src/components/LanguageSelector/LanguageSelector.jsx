import style from "./LanguageSelector.module.css";
import { useTranslation } from "react-i18next";
import flagSpain from "../../assets/flags/flag-spain.png";
import flagEngland from "../../assets/flags/flag-england.png";
import flagFrance from "../../assets/flags/flag-france.png";
import { useState } from "react";

export default function LanguageSelector() {
    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState("es");

    const handleLanguage = (e) => {
        const { value } = e.target;
        setLanguage(value);
        i18n.changeLanguage(value);
    };

    return (
        <div className={style.container}>
            <div className={style.flag}>
                {language === "es" && <img src={flagSpain} />}
                {language === "en" && <img src={flagEngland} />}
                {language === "fr" && <img src={flagFrance} />}
            </div>
            <select className={style.selector} onChange={(e) => handleLanguage(e)}>
                <option hidden>{t("components.languageSelector.language")}</option>
                {language !== "es" && <option value="es">{t("components.languageSelector.languageEs")}</option>}
                {language !== "en" && <option value="en">{t("components.languageSelector.languageEn")}</option>}
                {language !== "fr" && <option value="fr">{t("components.languageSelector.languageFr")}</option>}
            </select>
        </div>
    );
}
