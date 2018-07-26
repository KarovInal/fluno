import React, { Component } from 'react';
import FormItem from 'Atoms/form-item';
import TimelineEdit from 'Atoms/timeline-edit';
import FormFieldHOC from 'HOC/form-field-hoc';

@FormFieldHOC()
class TimelineForm extends Component {
  render() {
    const { input, meta, children, hasFeedback, fieldTitle, required = false, ...rest } = this.props;

    const hasError = meta.touched && meta.invalid;

    return (
      <FormItem
        fieldTitle={fieldTitle}
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
        required={required}
      >
        <TimelineEdit {...input} {...rest} />
      </FormItem>
    );
  }
}

export default TimelineForm;
