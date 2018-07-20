import React from 'react';
import { Row } from 'antd';
import { DescriptionText } from 'Atoms/fonts';
import SimpleBlock from 'Atoms/simple-block';

const stylesSimpleBlock = {
  height: '50px',
  marginTop: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const FooterOrganism = () => {
  return (
    <Row>
      <SimpleBlock style={stylesSimpleBlock}>
        <DescriptionText>
          (c) Fluno 2018
        </DescriptionText>
      </SimpleBlock>
    </Row>
  );
};

export default FooterOrganism;
