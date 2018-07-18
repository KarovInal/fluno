import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import TrainerInfo from 'Molecules/trainer-info';
import MenuLogout from 'Molecules/menu-logout';
import SimpleLine from 'Atoms/simple-line';
import HeaderOrganism from 'Organisms/header-organism';
import LeftSideMenuOrganism from 'Organisms/left-side-menu-organism';
import SimpleBlock from 'Components/atoms/simple-block';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <HeaderOrganism />
        <MainContainer style={{ marginTop: '20px' }}>
          <Row type="flex" gutter={20}>
            <Col span={5}>
              <SimpleBlock style={{ paddingTop: '30px', paddingBottom: '20px' }}>
                <TrainerInfo style={{ marginBottom: '20px' }} />
                <SimpleLine />
                <LeftSideMenuOrganism />
                <MenuLogout style={{ marginTop: '110px' }} />
              </SimpleBlock>
            </Col>
          </Row>
        </MainContainer>
      </div>
    );
  }
};

export default ProfilePage;
