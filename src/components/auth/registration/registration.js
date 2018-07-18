import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, isInvalid } from 'redux-form';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import EmailField from 'Atoms/email-field';
import PasswordField from 'Atoms/password-field';
import { AuthLabel, SimpleLink, LoignButton, SimpleLabel } from '../components';
import { fetchRegistration } from 'Ducks/trainer';
import { LOGIN } from 'Constants/routes';

const registerValidate = values => {
  let errors = {};

  // проварка email
  if (!values.email) {
    errors.email = 'Обязательно к заполнению';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неверный email';
  }

  // обязательно заполнить пароли
  if (!values.password || !values.repeat_password) {
    errors.password = errors.repeat_password = 'Заполните пароль';
  } else if (values.password !== values.repeat_password) {
    errors.repeat_password = 'Пароль не совпадает';
  }

  return errors;
};

const stateToProps = state => ({
  isInvalid: isInvalid('registration')(state)
});
const dispatchToProps = dispatch => bindActionCreators({
  fetchRegistration
}, dispatch);

@connect(stateToProps, dispatchToProps)
@reduxForm({
  form: 'registration',
  validate: registerValidate
})
class Registration extends Component {
  render() {
    const { handleSubmit, isInvalid, fetchRegistration } = this.props;

    return (
      <div>
        <AuthLabel>Регистрация</AuthLabel>
        <form onSubmit={ handleSubmit(fetchRegistration) }>
          <Row type="flex" justify="center" gutter={48}>
            <Col span={24}>
              <EmailField name="email" placeholder="E-mail" style={{ marginBottom: '5px' }} />
            </Col>
            <Col span={24}>
              <PasswordField name="password" placeholder="Пароль" style={{ marginBottom: '5px' }} />
            </Col>
            <Col span={24}>
              <PasswordField name="repeat_password" placeholder="Повторите пароль" style={{ marginBottom: '5px' }} />
            </Col>
          </Row>

          <Row type="flex" justify="center" style={{ marginBottom: '20px' }}>
            <Col span={12} />
            <Col span={12}>
              <SimpleLink textAlign="right" float="right">Забыли пароль?</SimpleLink>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span={24} style={{ marginBottom: '30px' }}>
              <LoignButton type='submit' disabled={ isInvalid }>Войти</LoignButton>
            </Col>
            <Col span={24}>
              <SimpleLabel textAlign="center">
                Есть аккаунта? <Link to={ LOGIN }>Войти.</Link>
              </SimpleLabel>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Registration;
