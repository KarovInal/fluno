import React from 'react';
import styled from 'styled-components';
import clockGreenSrc from 'Assets/img/clock-green.svg';
import clockSrc from 'Assets/img/clock-red.svg';

const ClockImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const Clock = ({ isAvailableDate = false, ...props}) => (
  <ClockImg {...props} src={ isAvailableDate ? clockGreenSrc : clockSrc } />
);
