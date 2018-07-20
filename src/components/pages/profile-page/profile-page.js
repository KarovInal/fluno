import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import TrainerInfo from 'Molecules/trainer-info';
import MenuLogout from 'Molecules/menu-logout';
import SimpleLine from 'Atoms/simple-line';
import HeaderOrganism from 'Organisms/header-organism';
import LeftSideMenuOrganism from 'Organisms/left-side-menu-organism';
import ProfileEdit from 'Organisms/profile-edit';
import FooterOrganism from 'Organisms/footer-organism';
import TopContent from 'Organisms/top-content';
import SimpleBlock from 'Components/atoms/simple-block';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <HeaderOrganism />
        <MainContainer style={{ marginTop: '20px' }}>
          <Row type="flex" gutter={24}>
            <Col span={5}>
              <SimpleBlock style={{ paddingTop: '30px', paddingBottom: '20px' }}>
                <TrainerInfo style={{ marginBottom: '20px' }} />
                <SimpleLine />
                <LeftSideMenuOrganism />
                <MenuLogout style={{ marginTop: '110px' }} />
              </SimpleBlock>
            </Col>
            <Col span={19}>
              <SimpleBlock style={{ padding: '0 48px 20px 48px' }}>
                <TopContent />
                <ProfileEdit />
              </SimpleBlock>
            </Col>
          </Row>
        </MainContainer>
        <FooterOrganism />
      </div>
    );
  }
};

export default ProfilePage;
