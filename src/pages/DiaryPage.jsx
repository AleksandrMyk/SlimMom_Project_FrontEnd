import React from "react";
import AddProductForm from "./../Components/AddProductForm"
import DiaryDateCalendar from "./../Components/Calendar/CalendarOnClick"

const DiaryPage = ({ date }) => {
  return (
    <>
      <h1>{date}</h1>
      <DiaryDateCalendar />
      <AddProductForm />
    </>
  );
};

export default DiaryPage;
