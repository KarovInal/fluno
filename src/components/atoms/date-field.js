import React, { Component } from 'react';
import { get } from 'lodash';
import moment from 'moment';
import { DatePicker } from 'antd';
import FormItem from 'Atoms/form-item';
import FormFieldHOC from 'HOC/form-field-hoc';

@FormFieldHOC()
class TextField extends Component {
  render() {
    let { input, meta, children, hasFeedback, fieldTitle, required = false, ...rest } = this.props;

    const hasError = meta.touched && meta.invalid;
  
    if(!input.value) {
      input.value = null
    } else {
      input.value = moment(input.value)
    }

    const style = {
      marginBottom: '10px',
      width: '100%',
      ...get(rest, 'style', {}),
    };

    return (
      <FormItem
        fieldTitle={fieldTitle}
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
        required={required}
      >
        <DatePicker
          {...input}
          {...rest}
          value={input.value ? moment(input.value) : null}
          onChange={value => input.onChange(moment(value).format())}
          style={style}
          children={children}
        />
      </FormItem>
    );
  }
}

export default TextField;