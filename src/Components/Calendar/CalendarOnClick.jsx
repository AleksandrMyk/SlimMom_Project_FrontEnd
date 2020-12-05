import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import iconCalendar from "./img/icons8-календарь.svg";
import styles from "./calendar.module.css";

const CalendarOnClick = (props) => {
  const [date, setdate] = useState(new Date());
  const [showCalendar, setshowCalendar] = useState(false);
  props.getDateValue(date.toLocaleDateString());
  const onChange = (date) => {
    setdate(date);
    setshowCalendar(false);
    props.getDateValue(date.toLocaleDateString());
  };

  const showCalendarOnClick = () => {
    if (!showCalendar) {
      setshowCalendar(true);
    } else {
      setshowCalendar(false);
    }
  };

    return (
      <div className={styles.calendar_on}>
        <div className={styles.calendar}>
          <p className={styles.date}>{date.toLocaleDateString()}</p>
          <img
            className={styles.icon}
            onClick={showCalendarOnClick}
            src={iconCalendar}
            alt="calendar"
          />
        </div>
        {showCalendar ? (
          <Calendar onChange={onChange} value={date} />
        ) : null}
      </div>
    );
  }
export default CalendarOnClick;