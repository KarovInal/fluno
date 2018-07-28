import React from 'react';
import { noop } from 'lodash';
import { Icon } from 'antd';
import { SimpleGrayBlock } from 'Atoms/simple-block';

const customStyleSimpleBlock = {
  borderRadius: '5px',
  padding: '20px 5px 5px 5px',
};
const customStyleRemoveIcon = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  cursor: 'pointer',
  fontSize: '15px'
}

const SimpleEditableBlock = ({ onRemove = noop, children, style = {} }) =>
  <SimpleGrayBlock style={{...customStyleSimpleBlock, ...style}}>
    <Icon type='close-square' onClick={onRemove} style={customStyleRemoveIcon} />
    { children }
  </SimpleGrayBlock>

export default SimpleEditableBlock;
