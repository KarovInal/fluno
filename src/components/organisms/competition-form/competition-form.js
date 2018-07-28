import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SimpleBlock from 'Atoms/simple-block';
import SectionTitle from 'Atoms/section-title';
import SimpleLine from 'Atoms/simple-line';
import CompetitionFormDescription from 'Molecules/competition-form-description';
import CompetitionTimeline from 'Molecules/competition-timeline';
import ProgramCompetition from 'Organisms/program-competition';
import ContactsCompetition from 'Organisms/contacts-competition';
import ContributionCompetition from 'Organisms/contribution-competition';
import { CREATE_COMPETITION } from 'Constants/form';
import { GROUP_PROGRAM, INDIVIDUAL_PROGRAM } from 'Constants/program';

const individualInitialValues = {
  [INDIVIDUAL_PROGRAM]: {
    rowCount: 1,
    columnCount: 4,
    programData: [
      [
        '2012',
        'МС',
        ['1', '2'],
        null,
      ],
    ]
  }
};

const groupInitialValues = {
  [GROUP_PROGRAM]: {
    rowCount: 1,
    columnCount: 4,
    programData: [
      [
        '2012',
        'МС',
        ['1', '2'],
        null,
      ],
    ]
  }
}

const contactsInitialValues = {
  contactsCompetition: [{}]
}

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
  }
})
class CompetitionForm extends Component {
  render() {
    return (
      <form>
        <SimpleBlock style={{ padding: '30px 47px' }}>
          <CompetitionFormDescription />
          <CompetitionTimeline />
          <SectionTitle style={{ marginTop: '30px' }} title='Программа соревнований' description='Здесь организатор описывает возраста, разряды и виды.' />
          <ProgramCompetition type={INDIVIDUAL_PROGRAM} {...this.props} />
          <ProgramCompetition type={GROUP_PROGRAM} {...this.props} />
          <ContactsCompetition {...this.props} />
          <ContributionCompetition { ...this.props } />
          <SimpleLine />
        </SimpleBlock>
      </form>
    )
  }
}

export default CompetitionForm;
