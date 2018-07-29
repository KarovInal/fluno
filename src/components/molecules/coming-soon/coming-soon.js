import React from 'react';
import {Col, Icon, Row} from 'antd';
import { RegularText } from 'Atoms/fonts';

const ComingSoon = ({ children, title, style = {} }) => (
  <Row align='middle' type='flex' style={{ textAlign: 'center', ...style }}>
    <Col span={24}>
      <Icon type={'tool'} style={{ fontSize: '40px', marginBottom: '10px' }} />
      <RegularText>
        В разработке...
      </RegularText>
      {
        title && (
          <RegularText>
            { title }
          </RegularText>
        )
      }
      {children}
    </Col>
  </Row>
);

export default ComingSoon;
