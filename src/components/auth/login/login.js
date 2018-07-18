import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, isInvalid } from 'redux-form';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import EmailField from 'Atoms/email-field';
import PasswordField from 'Atoms/password-field';
import { AuthLabel, SocialLoginIcon, SimpleLine, SimpleLink, LoignButton, SimpleLabel } from '../components';
import { signIn } from 'Ducks/trainer';
import { REGISTRATION } from 'Constants/routes';

import facebookIcon from 'Assets/img/facebook-icon.png';
import googleIcon from 'Assets/img/google-icon.png';
import odnoklassnikiIcon from 'Assets/img/odnoklassniki-icon.png';

const loginValidate = values => {
  let errors = {};

  // проварка email
  if (!values.email) {
    errors.email = 'Обязательно к заполнению';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неверный email';
  }

  // обязательно заполнить пароль
  if (!values.password) {
    errors.password = errors.repeat_password = 'Заполните пароль';
  }

  return errors;
};

const stateToProps = state => ({
  isInvalid: isInvalid('login')(state)
});
const dispatchToProps = dispatch => bindActionCreators({
  signIn
}, dispatch);

@connect(stateToProps, dispatchToProps)
@reduxForm({
  form: 'login',
  validate: loginValidate
})
class Login extends Component {
  render() {
    const { handleSubmit, signIn, isInvalid } = this.props;

    return (
      <div>
        <AuthLabel>Авторизация</AuthLabel>
        <Row type="flex" justify="center" gutter={24}>
          <Col>
            <SocialLoginIcon icon={facebookIcon} />
          </Col>
          <Col>
            <SocialLoginIcon icon={googleIcon} />
          </Col>
          <Col>
            <SocialLoginIcon icon={odnoklassnikiIcon} />
          </Col>
        </Row>
        <Row type="flex" justify="center" style={{ margin: '30px 0px' }}>
          <SimpleLine width="100px"/>
        </Row>

        <form onSubmit={ handleSubmit(signIn) }>
          <Row type="flex" justify="center" gutter={48}>
            <Col span={24}>
              <EmailField name="email" placeholder="E-mail" />
            </Col>
            <Col span={24}>
              <PasswordField name="password" placeholder="Пароль" />
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
                Нет аккаунта? <Link to={ REGISTRATION }>Зарегестрируйтесь.</Link>
              </SimpleLabel>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Login;
