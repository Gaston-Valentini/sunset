import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import MenuView from "./views/MenuView/MenuView";

export default function App() {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/menu" element={<MenuView />} />
            </Routes>
        </div>
    );
}
