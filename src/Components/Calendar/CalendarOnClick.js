import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import iconCalendar from "./img/icons8-календарь.svg";
import styles from "./calendar.module.css";

const CalendarOnClick = (props) => {
  // const currentDay = new Date().toISOString().split("T")[0];

  const [date, setdate] = useState(new Date());
  const [showCalendar, setshowCalendar] = useState(false);
  // state = {
  //   date: new Date(),
  //   showCalendar: false,
  // };

  // const onChange = (date) => {
  //   // this.setState({
  //   //   date,
  //   //   showCalendar: false,

  // };

  // useEffect(() => {
  //   props.getDateValue(date);
  // }, [date]);

  const handleSetNewDate = (date) => {
    setdate(date);
    setshowCalendar(false);
    props.onChange(date);
  };

  const showCalendarOnClick = () => {
    // if (!showCalendar) {
    //   this.setState({
    //     showCalendar: true,
    //   });
    // } else {
    //   this.setState({
    //     showCalendar: false,
    //   });
    // }

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
        <Calendar onChange={handleSetNewDate} value={date} />
      ) : null}
    </div>
  );
};

export default CalendarOnClick;
