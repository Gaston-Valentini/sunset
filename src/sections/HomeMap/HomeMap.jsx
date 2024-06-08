import style from "./HomeMap.module.css";
import { useTranslation } from "react-i18next";
import Map from "../../components/Map/Map";

export default function HomeMap() {
    const { t } = useTranslation("global");

    return (
        <section className={style.container}>
            <Map />
            <div className={style.link}>
                <a
                    href="https://www.google.com/maps/place/SUNSET/@38.524625,-0.167821,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b8fee29808b:0x99a77a65b9566544!8m2!3d38.524625!4d-0.1652461!16s%2Fg%2F11frssbw54?entry=ttu"
                    target="_blank"
                    className={style.link}
                >
                    {t("homeView.homeMap.link")}
                </a>
            </div>
        </section>
    );
}
