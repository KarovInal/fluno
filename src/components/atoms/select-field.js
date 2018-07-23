import React, { Component } from 'react';
import FormFieldHOC from 'HOC/form-field-hoc';
import FormItem from 'Atoms/form-item';
import Selector from 'Atoms/selector';

@FormFieldHOC()
class SelectField extends Component {
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
        <Selector {...input} {...rest} style={{ marginBottom: '10px' }} />
      </FormItem>
    )
  }
}

export default SelectField;
