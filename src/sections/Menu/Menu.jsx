import style from "./Menu.module.css";
import { menu } from "../../data/data";
import Subsection from "../../components/Subsection/Subsection";

export default function Menu({ menuSection }) {
    return (
        <section className={style.container}>
            {menu[menuSection].subsections.map((subsection, subsectionIndex) => (
                <Subsection subsection={subsection} key={subsectionIndex} />
            ))}
        </section>
    );
}
