import React, { useState, useEffect } from "react";

import styles from "./ClockTime.module.css";

const ClockTime = (props) => {
  // const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    let date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
  }

  useEffect(() => {
    if (hours >= 5 && hours <= 12) {
      setTimeOfDay("morning");
    } else if (hours > 12 && hours < 18) {
      setTimeOfDay("afternoon");
    } else if (hours >= 18 && hours < 22) {
      setTimeOfDay("evening");
    } else {
      setTimeOfDay("night");
    }
  }, [hours, timeOfDay]);

  props.onChangeBg(timeOfDay);

  let showClock = `${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes}`;

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
