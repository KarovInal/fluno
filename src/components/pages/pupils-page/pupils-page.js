import React, { Component, Fragment } from 'react';
import MainTemplate from 'Templates/main-template';
import TopContent from 'Organisms/top-content';
import AddPupil from 'Organisms/add-pupil';

class PupilsPage extends Component {
  render() {
    return (
      <MainTemplate
        mainContent={
          <Fragment>
            <TopContent>
              <AddPupil />
            </TopContent>
          </Fragment>
        }
      />
    )
  }
}

export default PupilsPage;
