import style from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { menu } from "../../data/data";

export default function Navbar({ menuSection, setMenuSection }) {
    const { t } = useTranslation("global");

    const selectedStyle = {
        fontWeight: 700,
        color: "white",
        backgroundColor: "black",
    };

    const handleChange = (value) => {
        setMenuSection(value);
    };

    return (
        <nav className={style.container}>
            {menu.map((section, sectionIndex) => (
                <p
                    key={sectionIndex}
                    style={menuSection === sectionIndex ? selectedStyle : {}}
                    className={style.button}
                    onClick={() => handleChange(sectionIndex)}
                >
                    {t(section.title)}
                </p>
            ))}
        </nav>
    );
}
