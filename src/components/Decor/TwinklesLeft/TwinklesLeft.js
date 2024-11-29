import { useParams } from "react-router-dom";
import adventDays from "../../../data/dayStyles";
import sprite from "../../../images/svg/twinkles.svg";
import s from "./TwinklesLeft.module.scss";

const TwinklesLeft = () => {
  const { dayId } = useParams();
  
  const {color} = adventDays.find((day) => day.date === +dayId) || {};

  return (
    <div className={s.TwinklesLeft}>
      <svg className={`${s.Twinkle1} ${s[color]}`}>
        <use href={`${sprite}#icon-twinkle1`} />
      </svg>
      <svg className={`${s.Twinkle2} ${s[color]}`}>
        <use href={`${sprite}#icon-twinkle2`} />
      </svg>
      <svg className={s.Twinkle3}>
        <use href={`${sprite}#icon-twinkle3`} />
      </svg>
    </div>
  );
};

export default TwinklesLeft;
