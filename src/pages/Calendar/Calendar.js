// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Header from "../../components/Header";
// import Main from "../../components/Main";
// import adventDays from "../../data/days";
// import sprite from "../../images/svg/sprite.svg";
// import s from "./Calendar.module.scss";

// const Calendar = () => {
//   useEffect(() => {
//     document.body.style.backgroundColor = "";
//   });

//   return (
//     <>
//       <Header text="Адвент календар"></Header>
//       <Main>
//         <ul className={s.Calendar}>
//           {adventDays.map((day) => {
//             return (
//               <li key={day.date} className={`${s.Day} ${s[day.color]}`}>
//                 <Link to={`/${day.date}`} className={s.Link}>
//                   <p className={`${s.Date} ${s[day.datePosition]}`}>
//                     {day.date}
//                   </p>
//                   <svg
//                     className={`${s.Logo} ${s[day.size]} ${s[day.logoPosition]}`}>
//                     <use href={sprite + `#icon-svg${day.date}`} />
//                   </svg>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </Main>
//     </>
//   );
// };

// export default Calendar;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";
import adventDays from "../../data/dayStyles";
import sprite from "../../images/svg/sprite.svg";
import s from "./Calendar.module.scss";

const Calendar = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "";
    return () => {
      document.body.style.backgroundColor = "initial";
    };
  }, []);

  return (
    <>
      <Header text="Адвент календар" />
      <Main>
        <ul className={s.Calendar}>
          {adventDays.map(
            ({ date, color, datePosition, size, logoPosition }) => (
              <li key={date} className={`${s.Day} ${s[color]}`}>
                <Link
                  to={`/${date}`}
                  className={s.Link}
                  aria-label={`Day ${date}`}
                >
                  <p className={`${s.Date} ${s[datePosition]}`}>{date}</p>
                  <svg
                    className={`${s.Logo} ${s[size]} ${s[logoPosition]}`}
                    aria-hidden="true"
                  >
                    <use href={`${sprite}#icon-svg${date}`} />
                  </svg>
                </Link>
              </li>
            )
          )}
        </ul>
      </Main>
    </>
  );
};

export default Calendar;
