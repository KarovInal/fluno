import React from 'react';
import { Button } from 'antd';

const styles = {
  greenButton: {
    backgroundColor: '#31C679',
    border: 'none'
  }
}

export const GreenButton = ({children, ...props}) => 
  <Button { ...props } style={ styles.greenButton }>{ children }</Button>
