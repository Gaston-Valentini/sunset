import style from "./Subsection.module.css";
import { useTranslation } from "react-i18next";
import Plate from "../../components/Plate/Plate";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Subsection({ subsection }) {
    const { t } = useTranslation("global");
    const [details, setDetails] = useState(false);

    const onDetails = () => {
        setDetails(!details);
    };

    return (
        <div className={style.container}>
            <div className={style.heading}>
                <div className={style.headingIcon}>
                    <img src={subsection.icon} />
                </div>
                <div className={style.headingText}>
                    <p>{t(subsection.title)}</p>
                    {subsection.subtitle !== "" && <span>{t(subsection.subtitle)}</span>}
                </div>
                <div className={style.headingIcon}>
                    <img src={subsection.icon} />
                </div>
            </div>
            <div className={details ? `${style.plates} ${style.platesOpen}` : style.plates}>
                {subsection.plates.map((plate, plateIndex) => (
                    <Plate plate={plate} key={plateIndex} />
                ))}
            </div>
            <IoIosArrowDown className={details ? `${style.more} ${style.moreOpen}` : style.more} onClick={onDetails} />
        </div>
    );
}
