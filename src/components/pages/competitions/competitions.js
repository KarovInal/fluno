import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { competitionsCountSelector } from 'Selectors/competition/competitions';
import MainTemplate from 'Templates/main-template';
import TopContent from 'Organisms/top-content';
import CompetitionsList from 'Organisms/competitions-list';
import { RegularText } from 'Atoms/fonts';
import ComingSoon from 'Molecules/coming-soon';

const stateToProps = createStructuredSelector({
  competitionsCount: competitionsCountSelector
});

@connect(stateToProps)
class Competitions extends Component {
  renderOrderCompetitions = () => (
    <RegularText>
      ВСЕГО СОРЕВНОВАНИЙ: { this.props.competitionsCount }
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
