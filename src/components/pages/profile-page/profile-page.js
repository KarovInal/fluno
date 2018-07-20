import React, { Component, Fragment } from 'react';
import TopContent from 'Organisms/top-content';
import ProfileEdit from 'Organisms/profile-edit';
import MainTemplate from 'Templates/main-template';

class ProfilePage extends Component {
  render() {
    return (
      <MainTemplate
        mainContent={
          <Fragment>
            <TopContent />
            <ProfileEdit />
          </Fragment>
        }
      />
    );
  }
};

export default ProfilePage;
