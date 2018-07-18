import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import { signOut } from 'Ducks/trainer';
import Icon from 'Atoms/icon';
import { RegularText } from 'Atoms/fonts';

import exitIcon from 'Assets/img/exit.svg';

const logoutWrapStyle = {
  cursor: 'pointer',
  paddingLeft: '30px',
  alignItems: 'center',
};

const stateToProps = () => ({});
const dispatchToProps = { signOut };

@connect(stateToProps, dispatchToProps)
class MenuLogout extends Component {
  handleLogout = () => {
    const { signOut } = this.props;

    signOut();
  };

  render() {
    const { style } = this.props;

    return (
      <Row type="flex" style={{ ...logoutWrapStyle, ...style }} onClick={ this.handleLogout }>
        <Icon icon={exitIcon} style={{ marginRight: '12px' }}/>
        <RegularText>Выйти</RegularText>
      </Row>
    );
  }
}

export default MenuLogout;
