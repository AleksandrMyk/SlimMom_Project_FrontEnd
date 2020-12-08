import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import iconCalendar from "./img/icons8-календарь.svg";
import styles from "./calendar.module.css";
import { DateContext } from "../../dateContext";

const CalendarOnClick = () => {
  // const [date, setdate] = useState(new Date());

  const data = useContext(DateContext);
  const [showCalendar, setshowCalendar] = useState(false);

  const onChange = (input) => {
    data.setDate(input);
    setshowCalendar(false);
  };

  const convert = data.date.toLocaleDateString();
  // console.log(convert);
  const showCalendarOnClick = () => {
    if (!showCalendar) {
      setshowCalendar(true);
    } else {
      setshowCalendar(false);
    }
  };
  // console.log(date);
  return (
    <div className={styles.calendar_on}>
      <div className={styles.calendar}>
        <p className={styles.date}>{convert}</p>
        <img
          className={styles.icon}
          onClick={showCalendarOnClick}
          src={iconCalendar}
          alt="calendar"
        />
      </div>
      {showCalendar ? <Calendar onChange={onChange} value={data.date} /> : null}
    </div>
  );
};
export default CalendarOnClick;
