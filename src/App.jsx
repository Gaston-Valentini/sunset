import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";

export default function App() {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/" element={<HomeView />} />
            </Routes>
        </div>
    );
}
