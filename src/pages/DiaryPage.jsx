import React from "react";
import AddProductForm from "./../Components/AddProductForm"

const DiaryPage = ({ date }) => {
  return (
    <>
      <h1>{date}</h1>
      <>Календарь</>
      <AddProductForm />
    </>
  );
};

export default DiaryPage;
