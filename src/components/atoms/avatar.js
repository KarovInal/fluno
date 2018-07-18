import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: black;
  background-image: url(${ ({ img }) => img });
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default Avatar;
