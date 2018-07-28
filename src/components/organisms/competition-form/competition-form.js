import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SimpleBlock from 'Atoms/simple-block';
import SectionTitle from 'Atoms/section-title';
import CompetitionFormDescription from 'Molecules/competition-form-description';
import CompetitionTimeline from 'Molecules/competition-timeline';
import ProgramCompetition from 'Molecules/program-competition';
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

@reduxForm({
  form: CREATE_COMPETITION,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  initialValues: {
    ...groupInitialValues,
    ...individualInitialValues
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
        </SimpleBlock>
      </form>
    )
  }
}

export default CompetitionForm;
