import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "../../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";
import "./style.css";
import calendar from "../../assets/icon/fi_calendar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  disableButton,
  enableButton,
  resetDateRent,
  saveDateRent,
} from "../../features/detail/detailSlice";

const Calendars = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [dayDiff, setDayDiff] = useState();
  const dispatch = useDispatch();
  const options = { year: "numeric", month: "short", day: "numeric" };
  const options2 = { year: "numeric", month: "numeric", day: "numeric" };

  const { is_disabled } = useSelector((state) => state.detail);
  // const state = useSelector((state) => state.detail);

  const handleReset = () => {
    setDateRange([null, null]);
    setDayDiff(null);
    dispatch(resetDateRent());
    dispatch(disableButton());
  };

  const handleGetDateRent = () => {
    if (startDate && endDate) {
      const payload = {
        start_date: startDate.toLocaleString("en-UK", options),
        end_date: endDate.toLocaleDateString("en-UK", options),
        start_rent_at: startDate.toLocaleDateString("en-CA", options2),
        finish_rent_at: endDate.toLocaleDateString("en-CA", options2),
      };
      // console.log(payload);
      dispatch(saveDateRent(payload));
      dispatch(enableButton());
      // console.log(payload);
    }
  };

  useEffect(() => {
    handleGetDateRent();
    if (dayDiff > 7) {
      alert("Maksimal 7 hari");
      setDateRange([null, null]);
      setDayDiff(null);
      dispatch(resetDateRent());
      dispatch(disableButton());
    } else if (startDate && endDate) {
      const diff = endDate.getTime() - startDate.getTime();
      setDayDiff(diff / (1000 * 60 * 60 * 24));
    }

    // console.log(state);  //go to line 27
  }, [dayDiff, startDate, endDate, dateRange]);

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
      />
      <FontAwesomeIcon
        className={is_disabled ? "showClose" : "hideClose"}
        onClick={handleReset}
        icon={faXmark}
      />
      <img src={calendar} alt="" className="img" />
    </div>
  );
};

export default Calendars;
