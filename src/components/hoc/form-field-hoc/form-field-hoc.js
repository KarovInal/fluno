import React from 'react';
import { Field } from 'redux-form';
import { isEmpty } from 'lodash';

const REQUIRED_MESSAGE = 'Обязательно к заполнению.';

const defaultValidate = () => {};

const requiredValidation = value => isEmpty(value) ? REQUIRED_MESSAGE : undefined;

const FormFieldHOC = ({validate = defaultValidate, type = 'text'} = {}) => WrappedComponent => ({required = false, ...props}) => {
  const validationList = [validate];

  if(required) validationList.push(requiredValidation);

  return (
    <Field
      { ...props }
      required={required}
      type={type}
      validate={validationList}
      component={WrappedComponent}
    />
  )
};

export default FormFieldHOC;
