import React, { Component, Fragment } from 'react';
import TopContent from 'Organisms/top-content';
import ComingSoon from 'Molecules/coming-soon/coming-soon';
import MainTemplate from 'Templates/main-template';

class NotFoundPage extends Component {
  render() {
    return (
      <MainTemplate
        mainContent={
          <Fragment>
            <TopContent />
            <ComingSoon title='Страница находится в разработке' />
          </Fragment>
        }
      />
    );
  }
};

export default NotFoundPage;
