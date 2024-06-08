import style from "./HomeHeader.module.css";
import Slider from "../../components/Slider/Slider";

export default function HomeHeader() {
    return (
        <section className={style.container}>
            <Slider>
                <div>
                    <img
                        src={
                            "https://phantom-marca.unidadeditorial.es/4b4d91362d32d08715ed5b4d7c536946/resize/828/f/jpg/assets/multimedia/imagenes/2022/02/17/16451199171920.jpg"
                        }
                    />
                </div>
                <div>
                    <img
                        src={
                            "https://s3.abcstatics.com/abc/www/multimedia/bienestar/2023/07/10/atardecer-verano-1-R6funi5jYXxtpImvVtH33OO-1200x840@abc.jpg"
                        }
                    />
                </div>
                <div>
                    <img src={"https://estaticos-cdn.prensaiberica.es/clip/3531bf5c-c273-484c-8852-63a84618045e_source-aspect-ratio_default_0.jpg"} />
                </div>
            </Slider>
        </section>
    );
}
