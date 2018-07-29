import React, { Component, Fragment } from 'react';
import TopContent from 'Organisms/top-content';
import NotFoundBlock from 'Atoms/not-found-block';
import MainTemplate from 'Templates/main-template';

class NotFoundPage extends Component {
  render() {
    return (
      <MainTemplate
        mainContent={
          <Fragment>
            <TopContent />
            <NotFoundBlock />
          </Fragment>
        }
      />
    );
  }
};

export default NotFoundPage;
