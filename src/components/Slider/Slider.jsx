import style from "./Slider.module.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import React, { useEffect, useState } from "react";

export default function Slider({ children }) {
    const childrenArray = React.Children.toArray(children);
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {}, []);

    return (
        <div className={style.container}>
            <div
                className={style.big}
                style={{ width: `${childrenArray.length}00%`, transform: `translateX(-${(index / childrenArray.length) * 100}%)` }}
            >
                {childrenArray.map((child, i) => (
                    <div key={i}>{child}</div>
                ))}
            </div>
            <div className={style.navbar}>
                <MdArrowLeft onClick={handlePrev} />
                <MdArrowRight onClick={handleNext} />
            </div>
            <div className={style.dots}>
                {childrenArray.map((_, i) => (
                    <div key={i} className={index === i ? `${style.dotsDot} ${style.dotsDotActive}` : style.dotsDot} onClick={() => setIndex(i)} />
                ))}
            </div>
        </div>
    );
}
