import { Link } from "react-router-dom";
import adventDays from "../../adventsDays";
import sprite from "../../images/svg/sprite.svg";
import s from "./Calendar.module.scss";

const Calendar = () => {
  return (
    <ul className={s.Calendar}>
      {adventDays.map((day) => {
          return (
              <li key={day.date} className={`${s.Day} ${s[day.color]}`}>
                  <Link to={`/${day.date}`} className={s.Link}>
                      <p className={`${s.Date} ${s[day.datePosition]}`}>{day.date}</p>
                      <svg className={`${s.Logo} ${s[day.size]} ${s[day.logoPosition]}`}>
                          <use href={sprite + `#icon-svg${day.date}`} />
{/* test */}
                      </svg>
                  </Link>
              </li>
          );
      })}
    </ul>
  );
};

export default Calendar;
