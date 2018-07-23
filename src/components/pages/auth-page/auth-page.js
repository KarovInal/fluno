import React, { Component }from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import Login from 'Components/auth/login';
import Registration from 'Components/auth/registration';
import {
  LOGIN,
  REGISTRATION
} from 'Constants/routes';

import styles from './style.css';
import authBackgroundImg from 'Assets/img/auth-background.jpg';

const AuthPageWrap = styled.div`
  height: 100%;
  background: url(${authBackgroundImg}) center center no-repeat scroll;
  background-size: 100%;
`;

const LogoOnAuth = styled.p`
  font-style: normal;
  font-size: 30px;
  line-height: 43px;
  text-align: center;
  margin-bottom: 30px;
`;

class AuthPage extends Component {
  renderAuthForm = () => {
    const { pathname } = this.props.location;

    switch(pathname) {
      case LOGIN:
        return <Login />
      case REGISTRATION:
        return <Registration />
      default:
        '';
    }
  };

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
                {
                  this.renderAuthForm()
                }
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
