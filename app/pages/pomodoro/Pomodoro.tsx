import React, { useEffect } from 'react';

import Timer from 'react-compound-timer';

import { getAuthorization } from './../../api/slack';

const Pomodoro = () => {
  const initialTime = 25 * 60 * 1000;

  const asyncAuth = async () => {
    const response = await getAuthorization();
    window.open(response.request.responseURL);
  };

  useEffect(() => {
    asyncAuth();
  }, []);

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
        {({ start, resume, pause, stop, reset }: any) => (
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
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </>
  );
};

export default Pomodoro;
