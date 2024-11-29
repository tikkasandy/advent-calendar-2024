import { useParams } from "react-router-dom";
import adventDays from "../../../data/dayStyles";
import sprite from "../../../images/svg/twinkles.svg";
import s from "./TwinklesRight.module.scss";

const TwinklesRight = () => {
  const { dayId } = useParams();

  const { color } = adventDays.find((day) => day.date === +dayId) || {};

  return (
    <div className={s.TwinklesRight}>
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

export default TwinklesRight;
