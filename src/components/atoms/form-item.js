import React, { Component } from 'react';
import FiledTitle from 'Atoms/field-title';
import { Form } from 'antd';

class FormItem extends Component {
  render() {
    const { children, fieldTitle, ...props } = this.props;

    return (
      <Form.Item
        {...props}
        style={{ margin: '0px' }}
      >
        { fieldTitle && <FiledTitle>{ fieldTitle }</FiledTitle> }
        { children }
      </Form.Item>
    );
  }
}

export default FormItem;
