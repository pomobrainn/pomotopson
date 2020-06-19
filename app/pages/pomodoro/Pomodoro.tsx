import React from 'react';

import Timer from 'react-compound-timer';

const Pomodoro = () => {
  const initialTime = 25 * 60 * 1000;

  return (
    <>
      <Timer
        initialTime={initialTime}
        direction="backward"
        checkpoints={[
          {
            time: 0,
            callback: () => console.log('Checkpoint A')
          }
        ]}
      >
        {({ start, resume, pause, stop }: any) => (
          <React.Fragment>
            <div>
              <Timer.Minutes /> minutes
              <Timer.Seconds /> seconds
            </div>
            <br />
            <div>
              <button onClick={start}>Start</button>
              <button onClick={pause}>Pause</button>
              <button onClick={resume}>Resume</button>
              <button onClick={stop}>Stop</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </>
  );
};

export default Pomodoro;
