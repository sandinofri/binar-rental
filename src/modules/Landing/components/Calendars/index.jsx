import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "../../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";
import "./style.css";
import calendar from "../../assets/icon/fi_calendar.png";

const Calendars = (props) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [dayDiff, setDayDiff] = useState();

  useEffect(() => {
    if (startDate && endDate) {
      const diff = endDate.getTime() - startDate.getTime();
      setDayDiff(diff / (1000 * 60 * 60 * 24));
      props.func(dayDiff);
      // console.log(dayDiff);
      if (dayDiff > 7) {
        alert("Maksimal 7 hari");
        setDateRange([null, null]);
      }
    }
  });

  return (
    <div className="calendar">
      <ReactDatePicker
        placeholderText="Pilih tanggal awal dan akhir sewa"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
      <img src={calendar} alt="" className="img" />
    </div>
  );
};

export default Calendars;
