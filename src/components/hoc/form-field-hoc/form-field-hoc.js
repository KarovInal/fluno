import React from 'react';
import { Field } from 'redux-form';

const defaultString = '';
const defaultValidate = () => {};
const defaultSetting = {
  validate: defaultValidate
};

const FormFieldHOC = ({ validate = defaultValidate } = defaultSetting) => WrappedComponent => (rest) => {
  return (
    <Field
      {...rest}
      component={WrappedComponent}
    />
  );
};

export default FormFieldHOC;
