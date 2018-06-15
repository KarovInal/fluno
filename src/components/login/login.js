import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Row, Col } from 'antd';
import EmailField from 'Fields/email-field';
import PasswordField from 'Fields/password-field';
import { facebookAuthProvider, googleAuthProvider } from 'Firebase/firebase';
import { AuthLabel, SocialLoginIcon, SimpleLine, SimpleLink, LoignButton, SimpleLabel } from './components';
import { signIn } from 'Ducks/user';

import facebookIcon from 'Assets/img/facebook-icon.png';
import googleIcon from 'Assets/img/google-icon.png';
import odnoklassnikiIcon from 'Assets/img/odnoklassniki-icon.png';

const stateToProps = () => ({});
const dispatchToProps = dispatch => bindActionCreators({
  signIn
}, dispatch);

@connect(stateToProps, dispatchToProps)
@reduxForm({
  form: 'login'
})
class Login extends Component {
  handleSocialLogin = provider => {
    this.props.signIn(provider);
  }

  render() {
    return (
      <div>
        <AuthLabel>Вход в аккаунт</AuthLabel>
        <Row type="flex" justify="center" gutter={24}>
          <Col>
            <SocialLoginIcon
              icon={facebookIcon}
              onClick={() => this.handleSocialLogin(facebookAuthProvider)}
            />
          </Col>
          <Col>
            <SocialLoginIcon
              icon={googleIcon}
              onClick={() => this.handleSocialLogin(googleAuthProvider)}
            />
          </Col>
          <Col>
            <SocialLoginIcon icon={odnoklassnikiIcon}/>
          </Col>
        </Row>
        <Row type="flex" justify="center" style={{ margin: '30px 0px' }}>
          <SimpleLine width="100px"/>
        </Row>
        <Row type="flex" justify="center" gutter={48}>
          <Col span={24}>
            <EmailField name="email" placeholder="E-mail" style={{ marginBottom: '20px' }} />
          </Col>
          <Col span={24}>
            <PasswordField name="password" placeholder="Пароль" style={{ marginBottom: '20px' }} />
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
            <LoignButton>Войти</LoignButton>
          </Col>
          <Col span={24}>
            <SimpleLabel textAlign="center">
              Нет аккаунта? <SimpleLink>Зарегестрируйтесь.</SimpleLink>
            </SimpleLabel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
