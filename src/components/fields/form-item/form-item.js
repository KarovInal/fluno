import React, { Component } from 'react';
import { Form } from 'antd';

class FormItem extends Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <Form.Item
        {...props}
        style={{ margin: '0px' }}
      >
        { children }
      </Form.Item>
    );
  }
}

export default FormItem;
