import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { map, get } from 'lodash';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import MenuItem from 'Atoms/menu-item';
import menuData from 'Constants/menu-data';

@withRouter
class LeftSideMenuOrganism extends Component {
  render() {
    const currentPath = get(this.props, 'match.path', '/');

    return (
      <Menu selectedKeys={[currentPath]}>
        {
          map(menuData, data =>
            <MenuItem key={data.path} icon={data.icon} >
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
