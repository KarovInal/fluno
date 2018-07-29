import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import HeaderTemplate from 'Templates/header-template';
import { LogoHeader } from 'Atoms/logo';
import { PurpleButton } from 'Atoms/buttons';
import Search from 'Templates/search';
import Badge from 'Templates/badge';
import { COMPETITION_CREATE } from 'Constants/routes';

class HeaderOrganism extends Component {
  render() {
    return (
      <HeaderTemplate>
        <MainContainer>
          <Row type="flex" gutter={24}>
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
              <Link to={COMPETITION_CREATE}>
                <PurpleButton>Добавить соревнование</PurpleButton>
              </Link>
            </Col>
          </Row>
        </MainContainer>
      </HeaderTemplate>
    );
  }
}

export default HeaderOrganism;
