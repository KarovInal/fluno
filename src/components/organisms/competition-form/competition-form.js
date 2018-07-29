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
    programData: [ [ null, null, null, null ] ]
  }
};

const groupInitialValues = {
  [GROUP_PROGRAM]: {
    rowCount: 1,
    columnCount: 4,
    programData: [ [ null, null, null, null ] ]
  }
};

const contactsInitialValues = {
  contactsCompetition: [{}]
};

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
    ...contactsInitialValues
  }
})
@connect(stateToProps, dispatchToProps)
class CompetitionForm extends Component {
  handleSubmit = values => {
    this.props.fetchCreateCompetition(values);
  };

  render() {
    const { invalid = false } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <SimpleBlock style={{ padding: '30px 47px' }}>
          <CompetitionFormDescription />
          <CompetitionTimeline required style={{ marginBottom: '40px' }} />
          <SectionTitle style={{ marginTop: '30px' }} title='Программа соревнований' description='Здесь организатор описывает возраста, разряды и виды.' />
          <ProgramCompetition type={INDIVIDUAL_PROGRAM} {...this.props} />
          <ProgramCompetition type={GROUP_PROGRAM} {...this.props} />
          <ContactsCompetition {...this.props} />
          <ContributionCompetition { ...this.props } />
          <SimpleLine style={{ marginBottom: '30px' }}/>
          <Row type='flex' justify='end'>
            <PurpleButton disabled={invalid} loading={this.props.isLoading} htmlType='submit'>Создать</PurpleButton>
          </Row>
        </SimpleBlock>
      </form>
    );
  }
}

export default CompetitionForm;
