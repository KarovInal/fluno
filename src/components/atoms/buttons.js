import React from 'react';
import { Button } from 'antd';

const styles = {
  greenButton: {
    backgroundColor: '#31C679',
    border: 'none',
    lineHeight: 'initial'
  },
  purpleButton: {
    backgroundColor: '#9652CE',
    border: 'none',
    lineHeight: 'initial'
  },
  redButton: {
    backgroundColor: '#FF1649',
    border: 'none',
    lineHeight: 'initial'
  }
}

export const GreenButton = ({children, ...props}) => 
  <Button type='primary' { ...props } style={ styles.greenButton }>{ children }</Button>

export const PurpleButton = ({ children, ...props }) =>
  <Button type='primary' {...props} style={styles.purpleButton}>{children}</Button>

export const RedButton = ({ children, ...props }) =>
  <Button type='primary' {...props} style={styles.redButton}>{children}</Button>
