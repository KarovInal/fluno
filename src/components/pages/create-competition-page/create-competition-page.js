import React, { Component, Fragment } from 'react';
import MainTemplate from 'Templates/main-template';
import TopContent from 'Organisms/top-content';
import CompetitionForm from 'Organisms/competition-form';

class CreateCompetitionPage extends Component {
  render() {
    return (
      <MainTemplate
        mainContent={
          <Fragment>
            <TopContent />
            <CompetitionForm />
          </Fragment>
        }
      />
    );
  }
}

export default CreateCompetitionPage;
