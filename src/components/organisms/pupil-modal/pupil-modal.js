import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValues } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { Modal, Col, Row } from 'antd';
import { createPupil, FETCH_CREATE_PUPIL } from 'Ducks/pupils';
import { isLoading } from 'Ducks/loading';
import SelectField from 'Atoms/select-field';
import TextField from 'Atoms/text-field';
import { GreenButton } from 'Atoms/buttons';
import UploadPhoto from 'Molecules/upload-photo';
import { EDIT_PUPIL } from 'Constants/form';
import { CaptionText } from 'Components/atoms/fonts';
import ranksForSelector from 'Selectors/normalize/ranks-for-selector';
import AVAILABLE_AGES_PUPIL from 'Constants/available-age-pupils';

const stateToProps = createStructuredSelector({
  ranksForSelector,
  isLoading: isLoading(FETCH_CREATE_PUPIL)
});
const dispatchToProps = { createPupil };

@reduxForm({ form: EDIT_PUPIL })
@formValues('avatar')
@connect(stateToProps, dispatchToProps)
class PupilModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    pupilData: PropTypes.object,
  }

  handleSubmit = async values => {
    await this.props.createPupil(values);
    this.props.onCancel();
    this.handleAfterClose();
  }

  handleAfterClose = () => this.props.reset(EDIT_PUPIL);

  renderTitle = () => <CaptionText>Добавление ученика</CaptionText>

  render() {
    return (
      <Modal destroyOnClose onCancel={this.props.onCancel} afterClose={this.handleAfterClose} visible={this.props.isOpen} footer={null} width={570} title={this.renderTitle()}>
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <Row type='flex'>
            <Col span={8}>
              <UploadPhoto name='avatar' previewImage={this.props.avatar} onPhotoChange={file => this.props.change('avatar', file)} />
            </Col>
            <Col span={16}>
              <TextField required name='lastName' placeholder="Фамилия" fieldTitle="Фамилия" />
              <TextField required name='firstName' placeholder="Имя" fieldTitle="Имя" />
              <TextField name='middleName' placeholder="Отчество" fieldTitle="Отчество" />
              <SelectField required name='rank' fieldTitle="Разряд ученика" placeholder="Разряд ученика" selectorValues={this.props.ranksForSelector} />
              <SelectField required name='yearOfBirth' fieldTitle="Дата рождения" placeholder="Дата рождения" selectorValues={AVAILABLE_AGES_PUPIL} />
              <Row type='flex' justify='end'>
                <GreenButton loading={this.props.isLoading} disabled={this.props.invalid} htmlType='submit'>Создать</GreenButton>
              </Row>
            </Col>
          </Row>
        </form>
      </Modal>
    );
  }
}

export default PupilModal;
