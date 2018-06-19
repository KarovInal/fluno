import React, { Component }from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import Login from 'Components/login';

import styles from './style.css';
import authBackgroundImg from 'Assets/img/auth-background.jpg';

const AuthPageWrap = styled.div`
  height: 100%;
  background: url(${authBackgroundImg}) center center no-repeat scroll;
`;

const LogoOnAuth = styled.p`
  font-style: normal;
  font-size: 30px;
  line-height: 43px;
  text-align: center;
  margin-bottom: 30px;
`;

class AuthPage extends Component {
  render() {
    return (
      <AuthPageWrap>
        <MainContainer className={styles.fullHeight}>
        <Row type="flex" justify="space-between" align="stretch" className={styles.fullHeight}>
          <Col span={16} />
          <Col span={8} style={{ backgroundColor: '#FFF' }}>
            <Row type="flex" justify="center" className={styles.authPageLogo}>
              <Col span={24}>
                <LogoOnAuth>FLUNO</LogoOnAuth>
              </Col>
              <Col span={24}>
                <Login />
              </Col>
            </Row>
          </Col>
        </Row>
        </MainContainer>
      </AuthPageWrap>
    );
  }
}

export default AuthPage;
