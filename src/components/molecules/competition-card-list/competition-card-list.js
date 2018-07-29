import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Col, Row, Icon} from 'antd';
import { withProps, compose } from 'recompose';
import {CoverCompetitionCardList} from 'Atoms/cover';
import {Clock} from 'Atoms/clock';
import {BoldText, RegularText} from 'Atoms/fonts';
import { isAvailableDateSelector, formatDateStartCompetition } from './selectors';

@compose(
  withProps(isAvailableDateSelector),
  withProps(formatDateStartCompetition)
)
class CompetitionCardList extends Component {
  static propTypes = {
    coverCompetition: PropTypes.string,
    nameCompetition: PropTypes.string,
    deadlineCompetition: PropTypes.string,
    dateStartCompetition: PropTypes.string,
    addressCompetition: PropTypes.string,
    countryCompetition: PropTypes.string,
    cityCompetition: PropTypes.string
  };

  render() {
    return (
      <Row type='flex'>
        <Col span={7}>
          <CoverCompetitionCardList cover={this.props.coverCompetition}/>
        </Col>
        <Col span={17}>
          <BoldText style={{ marginBottom: '10px' }}>
            <Clock isAvailableDate={this.props.isAvailableDate} style={{ marginRight: '10px' }}/>
            { this.props.nameCompetition }
          </BoldText>
          <RegularText style={{ marginBottom: '10px' }}>
            {`${this.props.countryCompetition}, ${this.props.cityCompetition}, ${this.props.addressCompetition}`}
          </RegularText>
          <RegularText light>
            <Icon type='calendar' style={{ marginRight: '8px' }}/>
            { this.props.dateStartCompetition }
          </RegularText>
        </Col>
      </Row>
    );
  }
}

export default CompetitionCardList;
