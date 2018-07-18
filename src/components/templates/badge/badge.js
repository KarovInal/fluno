import React, { Component } from 'react';
import styled from 'styled-components';
import { Badge } from 'antd';
import bellIcon from 'Assets/img/bell.svg';

const BellIcon = styled.span`
  width: 23px;
  height: 100%;
  display: inline-block;
  background-size: 100% 100%;
  background-image: url(${ bellIcon });
`;

class BadgeWrap extends Component {
  render() {
    return (
      <Badge {...this.props} style={{ backgroundColor: '#FFE5A0', color: '#676B69'}}>
        <BellIcon />
      </Badge>
    );
  }
}

export default BadgeWrap;
