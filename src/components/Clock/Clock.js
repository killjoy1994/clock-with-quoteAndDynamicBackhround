import React from "react";

import ClockTime from "./ClockTime/ClockTime";

const Clock = (props) => {
  const getBackground = (data) => {
    props.onChangeBg(data);
  };

  return (
    <div>
      <ClockTime onChangeBg={getBackground} />
    </div>
  );
};

export default Clock;
