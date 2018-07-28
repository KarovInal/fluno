import React from 'react';
import { Button } from 'antd';

const styles = {
  greenButton: {
    backgroundColor: '#31C679',
    border: 'none'
  },
  purpleButton: {
    backgroundColor: '#9652CE',
    border: 'none'
  },
  redButton: {
    backgroundColor: '#FF1649',
    border: 'none'
  }
}

export const GreenButton = ({children, ...props}) => 
  <Button type='primary' { ...props } style={ styles.greenButton }>{ children }</Button>

export const PurpleButton = ({ children, ...props }) =>
  <Button type='primary' {...props} style={styles.purpleButton}>{children}</Button>

export const RedButton = ({ children, ...props }) =>
  <Button type='primary' {...props} style={styles.redButton}>{children}</Button>
