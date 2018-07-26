import React, { Component } from 'react';
import { get } from 'lodash';
import { Input } from 'antd';
import FormItem from 'Atoms/form-item';
import FormFieldHOC from 'HOC/form-field-hoc';

@FormFieldHOC()
class TextField extends Component {
  render() {
    const { input, meta, children, hasFeedback, fieldTitle, required = false, ...rest } = this.props;

    const hasError = meta.touched && meta.invalid;

    const style = {
      marginBottom: '10px',
      ...get(rest, 'style', {}),
    }


    return (
      <FormItem
        fieldTitle={fieldTitle}
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
        required={required}
      >
        <Input {...input} {...rest} children={children} style={style} />
      </FormItem>
    );
  }
}

export default TextField;
