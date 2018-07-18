import React, { Component } from 'react';
import { Input } from 'antd';
import FormItem from 'Atoms/form-item';
import FormFieldHOC from 'HOC/form-field-hoc';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Некорректный email.'
    : undefined;

@FormFieldHOC({ validate: email })
class EmailField extends Component {
  render() {
    const { input, meta, children, hasFeedback, label, ...rest } = this.props;
    const hasError = meta.touched && meta.invalid;

    return (
      <FormItem
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Input {...input} {...rest} children={children} />
      </FormItem>
    );
  }
}

export default EmailField;
