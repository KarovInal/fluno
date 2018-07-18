import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import HeaderTemplate from 'Templates/header-template';
import { LogoHeader } from 'Atoms/logo';
import BlueButton from 'Atoms/blue-button';
import Search from 'Templates/search';
import Badge from 'Templates/badge';

class HeaderOrganism extends Component {
  render() {
    return (
      <HeaderTemplate>
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
      </HeaderTemplate>
    );
  }
}

export default HeaderOrganism;
