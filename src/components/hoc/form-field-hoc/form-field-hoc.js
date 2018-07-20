import React from 'react';
import { Field } from 'redux-form';

const defaultString = '';
const defaultValidate = () => {};
const defaultSetting = {
  validate: defaultValidate
};

const FormFieldHOC = ({ validate = defaultValidate, type = 'text' } = defaultSetting) => WrappedComponent => props => {
  return (
    <Field
      { ...props }
      type={type}
      validate={validate}
      component={WrappedComponent}
    />
  )
};

export default FormFieldHOC;
