import React, { Component, Fragment } from 'react';
import MainTemplate from 'Templates/main-template';
import TopContent from 'Organisms/top-content';
import AddPupil from 'Organisms/add-pupil';
import DisplayPupilsList from 'Organisms/display-pupils-list';

class PupilsPage extends Component {
  render() {
    return (
      <MainTemplate
        mainContent={
          <Fragment>
            <TopContent>
              <AddPupil />
            </TopContent>
            <DisplayPupilsList />
          </Fragment>
        }
      />
    );
  }
}

export default PupilsPage;
