import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import MenuIcon from 'Atoms/menu-icon';

class MenuItem extends Component {
  static propTypes = {
    icon: PropTypes.string
  }

  render() {
    const { children, icon, ...props } = this.props;

    return (
      <Menu.Item { ...props } style={{ alignItems: 'center', display: 'flex', padding: '0 30px' }}>
        { icon &&  <MenuIcon icon={ icon }/> }
        { children }
      </Menu.Item>
    );
  }
};

export default MenuItem;
