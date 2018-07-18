import React, { Component } from 'react';
import { Menu } from 'antd';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import MenuItem from 'Atoms/menu-item';
import menuData from './menu-data';

class LeftSideMenuOrganism extends Component {
  render() {
    return (
      <Menu>
        {
          map(menuData, (data, i) =>
            <MenuItem key={i} icon={data.icon}>
              <Link to={ data.path } style={{ color: '#676B69', fronSize: '14px' }}>
                { data.text }
              </Link>
            </MenuItem>
          )
        }
      </Menu>
    )
  }
}

export default LeftSideMenuOrganism;
