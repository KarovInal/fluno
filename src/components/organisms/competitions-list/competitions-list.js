import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { map } from 'lodash';
import { fetchGetCompetitions } from 'Ducks/competition';
import { competitionsSelector } from 'Selectors/competition/competitions';
import CompetitionCardList from 'Molecules/competition-card-list';
import SimpleLine from 'Atoms/simple-line';

const stateToProps = createStructuredSelector({
  competitions: competitionsSelector
});
const dispatchToProps = { fetchGetCompetitions };

@connect(stateToProps, dispatchToProps)
class CompetitionsList extends Component {
  componentDidMount = () => {
    this.props.fetchGetCompetitions();
  };

  render() {
    return (
      <Fragment>
        {
          map(this.props.competitions, (competition, index) => (
            <Fragment key={index}>
              <CompetitionCardList {...competition} />
              <SimpleLine style={{ margin: '20px 0'}} />
            </Fragment>
          ))
        }
      </Fragment>
    );
  }
}

export default CompetitionsList;
