import React from 'react';
import { Field } from 'redux-form';
import { isEmpty } from 'lodash';

const REQUIRED_MESSAGE = 'Обязательно к заполнению.';

const requiredValidation = value => isEmpty(value) ? REQUIRED_MESSAGE : undefined;

const FormFieldHOC = (options) => WrappedComponent => ({required = false, ...props}) => {
  const validate = required ? [requiredValidation] : [];

  return (
    <Field
      { ...props }
      { ...options }
      validate={validate}
      required={required}
      component={WrappedComponent}
    />
  )
};

export default FormFieldHOC;
