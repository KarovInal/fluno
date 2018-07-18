import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

const configSize = {
  sm: '15px',
  md: '30px',
  lg: '45px',
  bg: '50px' 
};

const Icon = styled.div`
  width: ${ ({ size }) => get(configSize, size, configSize.sm) };
  height: ${ ({ size }) => get(configSize, size, configSize.sm) };
  background-image: url(${ ({ icon = '' }) => icon });
  background-size: 100% auto;
  background-repeat: no-repeat;
`;

export default Icon;
