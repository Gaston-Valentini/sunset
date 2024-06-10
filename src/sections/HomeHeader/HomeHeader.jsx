import style from "./HomeHeader.module.css";
import Slider from "../../components/Slider/Slider";
import image1 from "../../assets/header/header-1.jpg";
import image2 from "../../assets/header/header-2.jpg";
import image3 from "../../assets/header/header-3.jpg";
import image4 from "../../assets/header/header-4.jpg";

export default function HomeHeader() {
    return (
        <section className={style.container}>
            <Slider>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
            </Slider>
        </section>
    );
}
