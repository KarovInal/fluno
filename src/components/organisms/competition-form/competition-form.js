import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SimpleBlock from 'Atoms/simple-block';
import CompetitionFormDescription from 'Molecules/competition-form-description';
import CompetitionTimeline from 'Molecules/competition-timeline';
import { CREATE_COMPETITION } from 'Constants/form';

@reduxForm({
  form: CREATE_COMPETITION
})
class CompetitionForm extends Component {
  render() {
    return (
      <form>
        <SimpleBlock style={{ padding: '30px 47px' }}>
          <CompetitionFormDescription />
          <CompetitionTimeline />
        </SimpleBlock>
      </form>
    )
  }
}

export default CompetitionForm;
