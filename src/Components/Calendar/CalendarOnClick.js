import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import iconCalendar from "./img/icons8-календарь.svg";
import styles from "./calendar.module.css";

export default class DiaryDateCalendar extends Component {
  state = {
    date: new Date(),
    showCalendar: false,
  };

  onChange = (date) => {
    this.setState({
      date,
      showCalendar: false,
    });
  };

  showCalendarOnClick = () => {
    this.setState({
      showCalendar: true,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.calendar}>
          <p className={styles.date}>{this.state.date.toLocaleDateString()}</p>
          <img
            className={styles.icon}
            onClick={this.showCalendarOnClick}
            src={iconCalendar}
            alt="calendar"
          />
        </div>
        {this.state.showCalendar ? (
          <Calendar onChange={this.onChange} value={this.state.date} />
        ) : null}
      </div>
    );
  }
}
