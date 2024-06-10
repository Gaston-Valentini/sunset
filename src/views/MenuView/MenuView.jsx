import style from "./MenuView.module.css";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import Title from "../../components/Title/Title";
import Navbar from "../../sections/Navbar/Navbar";
import Menu from "../../sections/Menu/Menu";
import { useState } from "react";

export default function MenuView() {
    const [menuSection, setMenuSection] = useState(0);

    return (
        <section className={style.container}>
            <div className={style.language}>
                <LanguageSelector />
            </div>
            <Title />
            <Navbar menuSection={menuSection} setMenuSection={setMenuSection} />
            <Menu menuSection={menuSection} />
        </section>
    );
}
