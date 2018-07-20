import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import MainContainer from 'Templates/main-container';
import TrainerInfo from 'Molecules/trainer-info';
import MenuLogout from 'Molecules/menu-logout';
import SimpleLine from 'Atoms/simple-line';
import HeaderOrganism from 'Organisms/header-organism';
import LeftSideMenuOrganism from 'Organisms/left-side-menu-organism';
import FooterOrganism from 'Organisms/footer-organism';
import SimpleBlock from 'Components/atoms/simple-block';

class MainTemplate extends Component {
  static propTypes = {
    mainContent: PropTypes.element,
    rightContent: PropTypes.element
  };

  render() {
    const spanConfig = {
      mainSpan: this.props.rightContent ? 14 : 19,
      rightSpan: 5
    };

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
            <Col span={spanConfig.mainSpan}>
              <SimpleBlock style={{ padding: '0 48px 20px 48px' }}>
                { this.props.mainContent }
              </SimpleBlock>
            </Col>
            {
              this.props.rightContent && (
                <Col span={spanConfig.rightSpan}>
                  <SimpleBlock style={{ padding: '30px 28px' }}>
                    { this.props.rightContent }
                  </SimpleBlock>
                </Col>
              )
            }
          </Row>
        </MainContainer>
        <FooterOrganism />
      </div>
    );
  }
}

export default MainTemplate;
