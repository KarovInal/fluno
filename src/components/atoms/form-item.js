import React, { Component } from 'react';
import FiledTitle from 'Atoms/field-title';
import { Form } from 'antd';

class FormItem extends Component {
  render() {
    const { children, fieldTitle, required, ...props } = this.props;

    const requiredSimbol = required ? '*' : '';

    return (
      <Form.Item {...props} style={{ margin: '0px' }}>
        { fieldTitle && <FiledTitle>{ `${fieldTitle} ${requiredSimbol}` }</FiledTitle> }
        { children }
      </Form.Item>
    );
  }
}

export default FormItem;
