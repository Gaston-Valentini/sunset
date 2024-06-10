import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import { menu } from "../../data/data";
import Plate from "../../components/Plate/Plate";

export default function Menu({ menuSection }) {
    const { t } = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <div className={style.headingIcon}>
                    <img src={menu[menuSection].icon} />
                </div>
                <div className={style.headingText}>
                    <p className={style.headingTextTitle}>{t(menu[menuSection].title)}</p>
                    {menuSection === 3 && <p>{t("menuView.menu.rices")}</p>}
                </div>
                <div className={style.headingIcon}>
                    <img src={menu[menuSection].icon} />
                </div>
            </div>
            <div className={style.plates}>
                {menu[menuSection].plates.map((plate, indexPlate) => (
                    <Plate plate={plate} key={`${menuSection}-${indexPlate}`} />
                ))}
            </div>
        </section>
    );
}
