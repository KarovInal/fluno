import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import SectionTitle from 'Atoms/section-title';
import TextField from 'Atoms/text-field';
import DateField from 'Atoms/date-field';
import UploadPhoto from 'Molecules/upload-photo';
import UploadDocument from 'Molecules/upload-document';

class CompetitionFormDescription extends Component {
  render() {
    return (
      <Fragment>
        <SectionTitle title='Описание' />
        <UploadPhoto name='coverCompetition' fieldTitle='Обложка соревнования' style={{ marginBottom: '20px' }} />
        <TextField required name='nameCompetition' placeholder='Название соревнования' fieldTitle='Название соревнования' style={{ marginBottom: '20px' }} />
        <Row type='flex' gutter={24} style={{ marginBottom: '20px' }}>
          <Col span={8}>
            <DateField required name='dateStartCompetition' placeholder='Выберите дату' fieldTitle='Дата начала соревнования' />
          </Col>
          <Col span={8}>
            <DateField required name='deadlineCompetition' placeholder='Выберите дату' fieldTitle='Дата окончания примема заявок' />
          </Col>
        </Row>
        <TextField required name='addressCompetition' placeholder='Точный адрес' fieldTitle='Точный адрес' style={{ marginBottom: '20px' }} />
        <Row type='flex' gutter={24} style={{ marginBottom: '20px' }}>
          <Col span={8}>
            <TextField required name='countryCompetition' placeholder='Страна' fieldTitle='Страна' />
          </Col>
          <Col span={8}>
            <TextField required name='cityCompetition' placeholder='Город' fieldTitle='Город' />
          </Col>
        </Row>
        <UploadDocument fieldTitle='Положение турнира' name='documentCompetition' style={{ marginBottom: '20px' }} />
      </Fragment>
    );
  }
}

export default CompetitionFormDescription;
