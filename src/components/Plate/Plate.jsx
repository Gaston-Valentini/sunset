import style from "./Plate.module.css";
import { useTranslation } from "react-i18next";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function Plate({ plate }) {
    const { t } = useTranslation("global");
    const [details, setDetails] = useState(false);

    const onDetails = () => {
        setDetails(!details);
    };

    return (
        <div className={style.container}>
            <div className={style.data}>
                <div className={style.dataName}>
                    <p className={style.dataNameText}>{t(plate.title)}</p>
                    <p className={style.dataNamePrice}>{plate.price}</p>
                </div>
                <div className={details ? `${style.dataInfo} ${style.dataInfoOpen}` : style.dataInfo}>
                    <div className={style.dataInfoImage}>
                        <img src={plate.image} />
                    </div>
                    <p className={style.dataInfoText}>{t(plate.description)}</p>
                </div>
            </div>
            <div className={style.more} onClick={onDetails}>
                {details ? <FaMinus /> : <FaPlus />}
            </div>
        </div>
    );
}
