import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import Header from 'Templates/header';
import { LogoHeader } from 'Templates/logo';
import Search from 'Templates/search';
import Badge from 'Templates/badge';
import { BlueButton } from 'Templates/buttons';

class Dashboard extends Component {
  render() {
    return (
      <Header>
        <MainContainer>
          <Row type="flex" gutter={20}>
            <Col span={5}>
              <LogoHeader>FLUNO</LogoHeader>
            </Col>
            <Col span={14} style={{ textAlign: 'center' }}>
              <Search />
            </Col>
            <Col span={1} style={{ textAlign: 'center' }}>
              <Badge count={5} />
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}>
              <BlueButton>Добавить соревнование</BlueButton>
            </Col>
          </Row>
        </MainContainer>
      </Header>
    );
  }
}

export default Dashboard;
