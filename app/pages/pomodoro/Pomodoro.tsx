import React from 'react';

import Timer from 'react-compound-timer';

const Pomodoro = () => {
  const initialTime = 25 * 60 * 1000;
  return (
    <>
      <Timer initialTime={initialTime} direction="backward">
        <Timer.Minutes /> minutes
        <Timer.Seconds /> seconds
      </Timer>
    </>
  );
};

export default Pomodoro;
