import React, { Component } from 'react';
import { Input, Form } from 'antd';
import FormItem from 'Atoms/form-item';
import FormFieldHOC from 'HOC/form-field-hoc';
import SmallIcon from 'Stateless/small-icon';
import EyeOpenIcon from 'Assets/img/eye-open-icon.png';
import EyeClosedIcon from 'Assets/img/eye-closed-icon.png';

@FormFieldHOC()
class PasswordField extends Component {
  state = {
    isPreview: false
  }

  renderEye() {
    const { isPreview } = this.state;

    return (
      <div onClick={ () => this.setState({ isPreview: !isPreview })}>
        <SmallIcon img={isPreview ? EyeClosedIcon : EyeOpenIcon} />
      </div>
    );
  }

  render() {
    const { input, meta, children, hasFeedback, label, ...rest } = this.props;
    const hasError = meta.touched && meta.invalid;
    const { isPreview } = this.state;

    return (
      <FormItem
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Input
          type={ !isPreview ? "password" : "text" }
          children={children}
          suffix={ this.renderEye() }
          {...input}
          {...rest}
        />
      </FormItem>
    );
  }
}

export default PasswordField;
