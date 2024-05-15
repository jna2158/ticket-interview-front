import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Timer({setTime}) {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setTotalSeconds((totalSeconds) => totalSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result = '';
    if (hours) {
      result = `${hours}시간 ${minutes}분 ${seconds}초`;
    } else if (minutes) {
      result = `${minutes}분 ${seconds}초`;
    } else {
      result = `${seconds}초`;
    }

    setTime(result);
    return result;
  };

  return (
    <TimerContainer>
      <TimerText>{formatTime(totalSeconds)}</TimerText>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
`;
const TimerText = styled.p`
  font-size: 3rem;
  color: #ffec99 !important;
  font-weight: 400;
`;