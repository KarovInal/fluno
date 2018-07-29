import React from 'react';
import {Row, Col, Icon} from 'antd';
import {RegularText, BoldText} from 'Atoms/fonts';

const NotFoundBlock = () => (
  <Row align='middle' type='flex' style={{ textAlign: 'center' }}>
    <Col span={24}>
      <Icon type="meh-o" style={{ fontSize: '40px', marginBottom: '10px' }} />
      <BoldText>404</BoldText>
      <RegularText>Страница не найдена.</RegularText>
    </Col>
  </Row>
);

export default NotFoundBlock;
