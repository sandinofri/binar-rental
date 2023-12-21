import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "../../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";
import "./style.css";

const Calendars = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="calendar">
      <ReactDatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    </div>
  );
};

export default Calendars;
