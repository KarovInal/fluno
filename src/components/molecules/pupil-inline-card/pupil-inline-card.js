import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Dropdown, Menu, Icon } from 'antd';
import { PupilAvatar } from 'Atoms/avatar';
import SimpleLine from 'Atoms/simple-line';
import { RegularText } from 'Atoms/fonts';

class PupilInlineCard extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    rank: PropTypes.string,
    yearOfBirth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
  }

  static defaultProps = {
    onRemove: () => {},
    onEdit: () => {},
  }

  renderOptions = (
    <Menu>
      <Menu.Item onClick={() => this.props.onEdit(this.props.id)}>
        <RegularText>Редактировать</RegularText>
      </Menu.Item>
      <Menu.Item onClick={() => this.props.onRemove(this.props.id)}>
        <RegularText>Удалить</RegularText>
      </Menu.Item>
    </Menu>
  )

  render() {
    return (
      <Row type='flex' style={{ height: '80px' }} align='middle'>
        <Col span={3}>
          <PupilAvatar img={this.props.avatar} />
        </Col>
        <Col span={11}>
          <RegularText>{this.props.firstName} {this.props.lastName}</RegularText>
        </Col>
        <Col span={4}>
          <RegularText>{this.props.yearOfBirth}</RegularText>
        </Col>
        <Col span={4}>
          <RegularText>{this.props.rank}</RegularText>
        </Col>
        <Col span={2}>
          <Dropdown placement='bottomRight' overlay={this.renderOptions}>
            <Icon style={{ cursor: 'pointer' }} type='down'/>
          </Dropdown>
        </Col>
        <SimpleLine />
      </Row>
    );
  }
};

export default PupilInlineCard;
