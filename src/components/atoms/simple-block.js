import React, { Component } from 'react';
import styled from 'styled-components';

const SimpleBlock = styled.div`
  position: relative;
  background-color: #FFF;
  border: solid #DEE3E1 1px;
`;

export const SimpleEmptyBlock = styled.div`
  position: relative;
  background-color: #FFF;
  height: ${ ({ height }) => height || 'auto' };
  width: ${ ({ width }) => width || '100%' };
`;

export const SimpleGrayBlock = styled.div`
  position: relative;
  background-color: #f9fafa;
  height: ${ ({ height }) => height || 'auto' };
  width: ${ ({ width }) => width || '100%' };
`;


export default SimpleBlock;
