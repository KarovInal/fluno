import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  height: 75px;
  position: relative;
  line-height: 75px;
  border-bottom: solid #DEE3E1 1px;
  background-color: #FFFFFF;
`;

const Header = ({ children }) =>
  <HeaderWrap>
    { children }
  </HeaderWrap>;

export default Header;
