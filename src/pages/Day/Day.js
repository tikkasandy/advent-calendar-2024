import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Task from "../../components/Task";
import s from "./Day.module.scss";
import variables from "../../styles/_colors.module.scss";
import adventDays from "../../data/dayStyles";
import Main from "../../components/Main";

const Day = () => {
  const { dayId } = useParams();

  useEffect(() => {
    const foundDay = adventDays.find((day) => day.date === +dayId);

    if (foundDay) {
      const colorValue = variables[foundDay.color];
      document.body.style.backgroundColor = colorValue;
    }
  }, [dayId]);

  return (
    <>
      <Header text={`${dayId} грудня`} />
      <Main>
        <Task date={dayId} />
      </Main>
    </>
  );
};

export default Day;
