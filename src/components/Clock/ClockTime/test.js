import React, { useState, useEffect } from "react";

import styles from "./ClockTime.module.css";

const ClockTime = (props) => {
  const [date, setDate] = useState(new Date());
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  let hours = date.getHours();
  let minutes = date.getMinutes();

  console.log(hours);

  useEffect(() => {
    if (hours >= 5 && hours <= 12) {
      setTimeOfDay("morning");
    } else if (hours > 12 && hours < 18) {
      setTimeOfDay("afternoon");
    } else if (hours >= 18 && hours < 24) {
      setTimeOfDay("evening");
    } else {
      setTimeOfDay("night");
    }
  });

  props.onChangeBg(timeOfDay);

  hours = hours < 10 ? (hours = "0" + hours) : hours;
  minutes = minutes < 10 ? (minutes = "0" + minutes) : minutes;

  let showClock = `${hours} : ${minutes}`;

  return (
    <div className={styles.clock}>
      <div className={styles.greeting}>
        <p>Good {timeOfDay}</p>
      </div>
      {showClock}
    </div>
  );
};

export default ClockTime;
