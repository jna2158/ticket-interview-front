import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';



export default function Timer() {
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

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <TimerContainer>
      <TimerText>{formatTime(totalSeconds)}</TimerText>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;
const TimerText = styled.h1`
  font-size: 3rem;
  color: #e6fcf5 !important;
  font-weight: 400;
`;