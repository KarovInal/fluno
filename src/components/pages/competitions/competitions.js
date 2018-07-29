import React, { Component, Fragment } from 'react';
import MainTemplate from 'Templates/main-template';
import TopContent from 'Organisms/top-content';
import CompetitionsList from 'Organisms/competitions-list';
import { RegularText } from 'Atoms/fonts';
import ComingSoon from 'Molecules/coming-soon';

class Competitions extends Component {
  renderOrderCompetitions = () => (
    <RegularText>
      ВСЕГО СОРЕВНОВАНИЙ: 12
    </RegularText>
  );

  render() {
    return (
      <MainTemplate
        mainContent={
          <Fragment>
            <TopContent leftContent={this.renderOrderCompetitions()} />
            <CompetitionsList />
          </Fragment>
        }
        rightContent={
          <ComingSoon title='Фильтры поиска для соревнований.' style={{ height: '200px' }} />
        }
      />
    );
  }
}

export default Competitions;
