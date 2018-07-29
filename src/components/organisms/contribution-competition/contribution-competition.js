import React, { Component } from 'react';
import { Row, Col } from 'antd';
import TextField from 'Atoms/text-field';
import SectionTitle from 'Atoms/section-title';

class ContributionCompetition extends Component {
  render() {
    return (
      <div style={{ marginBottom: '20px' }} >
        <SectionTitle title='Стартовый взнос' style={{ marginTop: '30px' }} />
        <Row type='flex' gutter={24}>
          <Col span={12}>
            <TextField name='financingIndividual' placeholder='0' fieldTitle='Взнос индивидуальных выступлений, руб' />
          </Col>
          <Col span={12}>
            <TextField name='financingGroup' placeholder='0' fieldTitle='Взнос групповых выступлений, руб' />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContributionCompetition;
