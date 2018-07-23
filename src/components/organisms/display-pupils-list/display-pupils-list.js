import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { map, get, find, isEmpty, toString } from 'lodash';
import { fetchSelfPupils, deletePupil, FETCH_SELF_PUPILS } from 'Ducks/pupils';
import { isLoading } from 'Ducks/loading';
import PupilModal from 'Organisms/pupil-modal';
import PupilInlineCard from 'Molecules/pupil-inline-card';
import LoadingScreen from 'Components/loading-screen';
import pupilsSelector from 'Selectors/pupils/pupils-selector';
import pupilsForList from 'Selectors/normalize/pupils-for-list';

const stateToProps = createStructuredSelector({
  pupils: pupilsSelector,
  pupilsList: pupilsForList,
  isLoading: isLoading(FETCH_SELF_PUPILS)
})
const dispatchToProps = {
  deletePupil,
  fetchSelfPupils,
};

@connect(stateToProps, dispatchToProps)
class DisplayPupilsList extends Component {
  state = {
    isOpenPupilModal: false,
    currentEditPupil: {}
  };

  componentDidMount() {
    this.props.fetchSelfPupils();
  };

  handleEditPupil = pupilID => {
    let result = find(this.props.pupils, { id: pupilID });

    result = {
      ...result,
      rank: toString(get(result, 'rank.id', '')),
      yearOfBirth: toString(get(result, 'yearOfBirth', ''))
    };

    this.setState({
      isOpenPupilModal: true,
      currentEditPupil: result || {}
    })
  };

  handleRemovePupil = async pupilID => {
    await this.props.deletePupil(pupilID);
    await this.props.fetchSelfPupils();
  };

  handleClosePupilModal = () => {
    this.setState({
      isOpenPupilModal: false,
      currentEditPupil: {}
    })
  };

  render() {
    if(this.props.isLoading) {
      return <LoadingScreen />;
    }

    if(isEmpty(this.props.pupilsList)) {
      return <h1>Список учеников пуст =(</h1>
    }

    return (
      <div>
        {
          map(this.props.pupilsList, pupil => (
            <PupilInlineCard
              key={pupil.id}
              {...pupil}
              onRemove={this.handleRemovePupil}
              onEdit={this.handleEditPupil}
            />
          ))
        }
        <PupilModal
          isEdit
          pupilData={this.state.currentEditPupil}
          isOpen={this.state.isOpenPupilModal}
          onCancel={this.handleClosePupilModal}
        />
      </div>
    );
  }
};

export default DisplayPupilsList;
