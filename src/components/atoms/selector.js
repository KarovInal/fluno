import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';
import { Select } from 'antd';

const Option = Select.Option;

class Selector extends Component {
  static propTypes = {
    selectorValues: PropTypes.array
  };

  static defaultProps = {
    defaultValue: undefined
  }

  render() {
    let { selectorValues, value, ...props } = this.props;
    value = isEmpty(value)
      ? this.props.defaultValue
      : value;

    return (
      <Select {...props} value={value}>
        {
          map(selectorValues, selectorValue => (
            <Option value={selectorValue.value} key={selectorValue.value}>
              {selectorValue.text}
            </Option>
          ))
        }
      </Select>
    );
  }
}

export default Selector;
