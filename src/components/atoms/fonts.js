import React from 'react';
import styled from 'styled-components';

export const RegularText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.light ? 'rgba(103, 107, 105, 0.5)' : '#676B69'};
  margin: ${props => props.margin || '0px'};
  padding: 0px;
  display: ${props => props.inline ? 'inline' : 'block'};
  cursor: ${props => props.pointer ? 'pointer' : 'auto' }
`;

export const DescriptionText = styled.p`
  font-size: 12px;
  color: ${props => props.light ? 'rgba(103, 107, 105, 0.5)' : '#676B69'};
  line-height: 17px;
  margin: 0px;
  padding: 0px;
  display: ${props => props.inline ? 'inline' : 'block'}
`;

export const CaptionText = styled.h1`
  color: ${props => props.light ? 'rgba(103, 107, 105, 0.5)' : '#676B69'};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;
  display: ${props => props.inline ? 'inline' : 'block'}
`;

export const BoldText = styled.h2`
  color: ${props => props.light ? 'rgba(103, 107, 105, 0.5)' : '#676B69'};
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  display: ${props => props.inline ? 'inline' : 'block'}
`;
