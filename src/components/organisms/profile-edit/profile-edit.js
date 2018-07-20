import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { Col, Row } from 'antd';
import { reduxForm, formValues } from 'redux-form';
import { editProfile, FETCH_EDIT_PROFILE } from 'Ducks/trainer';
import { isLoading } from 'Ducks/loading';
import { EDIT_PROFILE } from 'Constants/form';
import UploadFile from 'Molecules/upload-photo';
import TextField from 'Atoms/text-field';
import SimpleLine from 'Atoms/simple-line';
import { GreenButton } from 'Atoms/simple-button';
import initialDataTrainer from 'Selectors/trainer/initial-data-trainer';

const stateToProps = state => ({
  isUpdatingProfile: isLoading(FETCH_EDIT_PROFILE)(state),
  initialValues: {
    ...initialDataTrainer(state)
  }
});

const dispatchToProps = {
  editProfile
};

@connect(stateToProps, dispatchToProps)
@reduxForm({ form: EDIT_PROFILE })
@formValues('photo')
class ProfileEdit extends Component {
  fetchUserData = values => {
    this.props.editProfile(values)
  };

  render() {
    const { change, handleSubmit, photo = '', isUpdatingProfile } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit(this.fetchUserData) }>
          <Row type="flex" gutter={24}>
            <Col span="5">
              <UploadFile
                name="photo"
                previewImage={photo}
                onPhotoChange={file => change('photo', file)}
              />
            </Col>
            <Col span="19">
              <Row type="flex" gutter={24}>
                <Col span={12}>
                  <TextField name='lastName' placeholder="Фамилия" fieldTitle="Фамилия" />
                </Col>
                <Col span={12}>
                  <TextField name='firstName' placeholder="Имя" fieldTitle="Имя" />
                </Col>
              </Row>
              <Row type="flex" gutter={24}>
                <Col span={12}>
                  <TextField name='middleName' placeholder="Отчество" fieldTitle="Отчество" />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row type="flex" gutter={24}>
            <Col span={24}>
              <TextField name='workPlace' placeholder="Место работы" fieldTitle="Место работы" />
            </Col>
          </Row>

          <Row type="flex" gutter={24}>
            <Col span={12}>
              <TextField name='country' placeholder="Страна" fieldTitle="Страна" />
            </Col>
            <Col span={12}>
              <TextField name='city' placeholder="Город" fieldTitle="Город" />
            </Col>
          </Row>

          <Row type="flex" gutter={24}>
            <Col span={12}>
              <TextField name='phoneNumber' placeholder="Телефон" fieldTitle="Телефон" />
            </Col>
            <Col span={12}>
              <TextField name='email' placeholder="Email" fieldTitle="Email" />
            </Col>
          </Row>

          <SimpleLine style={{ margin: '20px 0' }} />

          <Row type="flex" gutter={24} justify="end">
            <GreenButton
              loading={isUpdatingProfile}
              style={{ float: 'right' }}
              htmlType='submit'
              type='primary'>
                Сохранить
            </GreenButton>
          </Row>
        </form>
      </div>
    );
  }
};

export default ProfileEdit;
