import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import { Row } from 'antd';
import SimpleBlock from 'Atoms/simple-block';
import SectionTitle from 'Atoms/section-title';
import SimpleLine from 'Atoms/simple-line';
import { PurpleButton } from 'Atoms/buttons';
import CompetitionFormDescription from 'Molecules/competition-form-description';
import CompetitionTimeline from 'Molecules/competition-timeline';
import ProgramCompetition from 'Organisms/program-competition';
import ContactsCompetition from 'Organisms/contacts-competition';
import ContributionCompetition from 'Organisms/contribution-competition';
import { CREATE_COMPETITION } from 'Constants/form';
import { GROUP_PROGRAM, INDIVIDUAL_PROGRAM } from 'Constants/program';
import { fetchCreateCompetition, FETCH_CREATE_COMPETITION } from 'Ducks/competition';
import { isLoading } from 'Ducks/loading';

const individualInitialValues = {
  [INDIVIDUAL_PROGRAM]: {
    rowCount: 1,
    columnCount: 4,
    programData: [ [ '2012', 'МС', ['1', '2'], null ] ]
  }
};

const groupInitialValues = {
  [GROUP_PROGRAM]: {
    rowCount: 1,
    columnCount: 4,
    programData: [ [ '2012', 'МС', ['1', '2'], null ] ]
  }
}

const contactsInitialValues = {
  contactsCompetition: [
    {
      fio: 'Petrova',
      phone: '228',
      position: 'wad',
      email: 'awdawd'
    }
  ]
}

const stateToProps = createStructuredSelector({
  isLoading: isLoading(FETCH_CREATE_COMPETITION)
});
const dispatchToProps = { fetchCreateCompetition };

@reduxForm({
  form: CREATE_COMPETITION,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  initialValues: {
    ...groupInitialValues,
    ...individualInitialValues,
    ...contactsInitialValues,
    financingIndividual: 0,
    financingGroup: 0,
    nameCompetition: 'Olimpic games',
    dateStartCompetition: '2018-07-24T21:00:00.000Z',
    deadlineCompetition: '2018-07-24T21:00:00.000Z',
    addressCompetition: 'Profsouz',
    countryCompetition: 'Russia',
    cityCompetition: 'Moscow',
    timelinesCompetition: [
      {
        times: [
          {
            time: '2018-07-03T15:30:36.487Z',
            text: '21e12e'
          },
          {
            time: 'awdawd',
            text: 'awdaw'
          },
          {
            time: 'dawd',
            text: 'awdawd'
          }
        ]
      }
    ]
  }
})
@connect(stateToProps, dispatchToProps)
class CompetitionForm extends Component {
  handleSubmit = values => {
    console.log(values);
    this.props.fetchCreateCompetition(values);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <SimpleBlock style={{ padding: '30px 47px' }}>
          <CompetitionFormDescription />
          <CompetitionTimeline style={{ marginBottom: '40px' }} />
          <SectionTitle style={{ marginTop: '30px' }} title='Программа соревнований' description='Здесь организатор описывает возраста, разряды и виды.' />
          <ProgramCompetition type={INDIVIDUAL_PROGRAM} {...this.props} />
          <ProgramCompetition type={GROUP_PROGRAM} {...this.props} />
          <ContactsCompetition {...this.props} />
          <ContributionCompetition { ...this.props } />
          <SimpleLine style={{ marginBottom: '30px' }}/>
          <Row type='flex' justify='end'>
            <PurpleButton loading={this.props.isLoading} htmlType='submit'>Создать</PurpleButton>
          </Row>
        </SimpleBlock>
      </form>
    )
  }
}

export default CompetitionForm;
