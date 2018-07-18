import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import trainerDate from 'Selectors/trainer/trainer-data';
import CenterContent from 'Templates/center-content';
import Avatar from 'Atoms/avatar';
import TrainerName from 'Atoms/trainer-name';
import TrainerSchool from 'Atoms/trainer-school';

const stateToProps = state => ({
  trainer: trainerDate(state)
});

@connect(stateToProps)
class TrainerInfo extends Component {
  render() {
    const { trainer, style } = this.props;

    if(isEmpty(trainer)) {
      <p>Пользователь не найден</p>
    }

    return (
      <CenterContent style={ style }>
        <Avatar img={ trainer.photo } />
        <TrainerName>{ `${trainer.firstName} ${trainer.lastName}` }</TrainerName>
        <TrainerSchool>{ trainer.workPlace }</TrainerSchool>
      </CenterContent>
    );
  }
};

export default TrainerInfo;
