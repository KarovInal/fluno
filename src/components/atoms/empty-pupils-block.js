import React from 'react';
import {Row, Col, Icon} from 'antd';
import {RegularText} from 'Atoms/fonts';

const EmptyPupilsBlock = () => (
  <Row align='middle' type='flex' style={{ textAlign: 'center' }}>
    <Col span={24}>
      <Icon type="frown-o" style={{ fontSize: '40px', marginBottom: '10px' }} />
      <RegularText>Список учеников пуст.</RegularText>
      <RegularText>Самое время добавить!</RegularText>
    </Col>
  </Row>
);

export default EmptyPupilsBlock;
