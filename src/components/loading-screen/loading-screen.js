import React, { Component } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoaderScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class LoadingScreen extends Component {
  render() {
    return (
      <LoaderScreen>
        <Spin size="large"/>
        <br />
        <p>Загрузка...</p>
      </LoaderScreen>
    );
  }
}

export default LoadingScreen;
