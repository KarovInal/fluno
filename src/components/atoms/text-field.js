import React, { Component } from 'react';
import { Input } from 'antd';
import FormItem from 'Atoms/form-item';
import FormFieldHOC from 'HOC/form-field-hoc';

@FormFieldHOC()
class TextField extends Component {
  render() {
    const { input, meta, children, hasFeedback, fieldTitle, ...rest } = this.props;
    const hasError = meta.touched && meta.invalid;

    return (
      <FormItem
        fieldTitle={fieldTitle}
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Input {...input} {...rest} children={children} />
      </FormItem>
    );
  }
}

export default TextField;
