import React, { Component, Fragment } from 'react';
import MainTemplate from 'Templates/main-template';
import TopContent from 'Organisms/top-content';
import AddPupil from 'Organisms/add-pupil';
import DisplayPupilsList from 'Organisms/display-pupils-list';
import ComingSoon from 'Molecules/coming-soon';

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
        rightContent={
          <ComingSoon title='Фильтры поиска для учеников.' style={{ height: '200px' }} />
        }
      />
    );
  }
}

export default PupilsPage;
