import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import adventTasks from "../../data/tasks";
import christmasStash from "../../data/stash";
import dayStyles from "../../data/dayStyles";
import sprite from "../../images/svg/tasksSprite.svg";
import s from "./Task.module.scss";

const Task = ({ date }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState(null);

  const todayTask = adventTasks.find((task) => task.date === +date) || {};
  const todayStash = christmasStash.find((day) => day.date === +date) || {};
  const todayStyle = dayStyles.find((day) => day.date === +date) || {};

  console.log(dayStyles[0]);

  const { task, logo } = todayTask;
  const { stash, password } = todayStash;
  const { color } = todayStyle;

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setCorrectPassword(inputPassword.trim() === password);
  };

  return (
    <div className={`${s.Day} ${s[color]}`}>
      <div>
        <div className={s.TaskWrap}>
          <p className={s.Task}>{task}</p>
        </div>

        {/* <svg className={`${s.Decor} ${s.Candle}`}>
            <use href={decor + `#icon-svg2`} />
          </svg>
          <svg className={`${s.Decor} ${s.Leaves}`}>
            <use href={decor + `#icon-svg3`} />
          </svg>
          <svg className={`${s.Decor} ${s.Tree}`}>
            <use href={decor + `#icon-svg4`} />
          </svg>
          <svg className={`${s.Decor} ${s.Spiral}`}>
            <use href={decor + `#icon-svg5`} />
          </svg>
          <svg className={`${s.Decor} ${s.Star}`}>
            <use href={decor + `#icon-svg6`} />
          </svg>
          <svg className={`${s.Decor} ${s.Hat}`}>
            <use href={decor + `#icon-svg7`} />
          </svg> */}
        {/* <p className={s.SubTask}>{subTask}</p> */}
        <div className={s.LogoWrap}>
          <svg className={`${s.Logo}`}>
            <use href={sprite + `#icon-${logo}`} />
          </svg>
        </div>
      </div>

      <div className={s.Password}>
        <p className={s.Hint}>Щоб знайти подарунок, введи таємний код!</p>
        <form onSubmit={handlePasswordSubmit} className={s.Form}>
          <div className={s.InputWrapper}>
            <input
              type="text"
              value={inputPassword}
              onChange={handlePasswordChange}
              className={s.Input}
            />
            <button className={s.Submit} type="submit">
              <IoCheckmark className={s.Svg}></IoCheckmark>
            </button>
          </div>
        </form>
      </div>

      {correctPassword === true ? (
        <div className={s.Stash}>{stash}</div>
      ) : correctPassword === false ? (
        <div className={s.ErrorMessage}>You are a cheater!</div>
      ) : null}
    </div>
  );
};

export default Task;
