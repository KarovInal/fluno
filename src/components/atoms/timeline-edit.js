import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FieldArray, arrayRemove } from 'redux-form';
import { isEmpty, reduce, get} from 'lodash';
import { Icon, Modal, Row, Col } from 'antd';
import TextField from 'Atoms/text-field';
import DateField from 'Atoms/date-field';
import { CaptionText, RegularText } from 'Atoms/fonts';
import { GreenButton } from 'Atoms/buttons';

@connect()
class TimelineEdit extends Component {
  renderTitle = <CaptionText>Добавление даты и времени</CaptionText>;

  renderTime = fieldName => (
    <TextField
      style={{ marginBottom: '0px' }}
      name={fieldName}
      placeholder='Выберите время 11:00'
    />
  );

  renderDate = fieldName => (
    <DateField
      name={fieldName}
      placeholder='Выберите дату'
      style={{ width: '100%', marginBottom: '0px' }}
    />
  );

  renderTimes = ({ fields, meta: { invalid } }) => {
    return (
      <div>
        {
          fields.map((times, index) => {
            const isFirstElement = (index === 0);

            return (
              <Row type='flex' key={index}>
                <Col span={8}>
                  {
                    isFirstElement
                      ? this.renderDate(`${times}.time`)
                      : this.renderTime(`${times}.time`)
                  }
                </Col>
                <Col span={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <RegularText>:</RegularText>
                </Col>
                <Col span={13}>
                  <TextField
                    name={`${times}.text`}
                    style={{ width: '100%', marginBottom: '0px' }}
                    placeholder={ isFirstElement ? 'Описание даты' : 'Описание времени' }
                  />
                </Col>
                <Col span={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  {
                    !isFirstElement && (
                      <Icon
                        style={{ fontSize: 20 }}
                        type="delete"
                        onClick={() => fields.remove(index)}
                      />
                    )
                  }
                </Col>
              </Row>
            );
          })
        }
        <RegularText style={{ cursor: 'pointer' }} onClick={() => fields.push({})}>
          + Добавить строку
        </RegularText>
        <Row type='flex' justify='end'>
          <GreenButton disabled={invalid} onClick={this.props.onCloseTimeline}>
            Сохранить
          </GreenButton>
        </Row>
      </div>
    );
  };

  validateFieldArray = timlineData =>
    reduce(timlineData, (isValid, value) => {
      if(isEmpty(value)) return isValid = 'Ошибка';

      const time = get(value, 'time', null),
            text = get(value, 'text', null);

      if(isEmpty(time) || isEmpty(text)) return isValid = 'Ошибка';

      return isValid = undefined;
    }, undefined);

  render() {
    return (
      <Modal destroyOnClose title={this.renderTitle} width={650} visible={this.props.isOpenTimelineEdit} onCancel={() => this.props.onCloseTimeline()} footer={null}>
        <FieldArray name={`${this.props.timeline}.times`} validate={this.validateFieldArray} component={this.renderTimes} />
      </Modal>
    );
  }
}

export default TimelineEdit;
