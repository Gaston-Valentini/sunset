import style from "./HomeView.module.css";
import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import HomeData from "../../sections/HomeData/HomeData";
import HomeMap from "../../sections/HomeMap/HomeMap";

export default function HomeView() {
    return (
        <section className={style.container}>
            <HomeHeader />
            <HomeData />
            <HomeMap />
        </section>
    );
}
