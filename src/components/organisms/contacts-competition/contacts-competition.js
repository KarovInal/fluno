import React, { Component, Fragment } from 'react';
import { FieldArray } from 'redux-form';
import { Row, Col } from 'antd';
import { RegularText } from 'Atoms/fonts';
import SectionTitle from 'Atoms/section-title';
import TextField from 'Atoms/text-field';
import EmailField from 'Atoms/email-field';
import SimpleEditableBlock from 'Molecules/simple-editable-block';

class ContactsCompetition extends Component {
  renderContacts = ({fields}) => {
    return (
      <Fragment>
        {
          fields.map((fieldName, index) => {
            return (
              <SimpleEditableBlock onRemove={() => fields.remove(index)} style={{ marginBottom: '10px' }}>
                <Row type='flex' key={index} gutter={24}>
                  <Col span='12'>
                    <TextField name={`${fieldName}.fio`} fieldTitle='ФИО' placeholder='ФИО' />
                    <TextField name={`${fieldName}.phone`} fieldTitle='Телефон' placeholder='+7(___) ___-__-__' />
                  </Col>
                  <Col span='12'>
                    <TextField name={`${fieldName}.position`} fieldTitle='Должность' placeholder='Должность' />
                    <EmailField name={`${fieldName}.email`} fieldTitle='Email' placeholder='Email' />
                  </Col>
                </Row>
              </SimpleEditableBlock>
            );
          })
        }
        <RegularText pointer onClick={() => fields.push()}>+ Добавить контакт</RegularText>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <SectionTitle style={{ marginTop: '30px' }} title='Контакты' />
        <FieldArray name='contacts' component={this.renderContacts} />
      </Fragment>
    );
  }
}

export default ContactsCompetition;
