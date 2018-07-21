import React, { Component } from 'react';
import { GreenButton } from 'Atoms/buttons';
import PupilModal from 'Organisms/pupil-modal';

class AddPupil extends Component {
  state = {
    isOpen: false
  };

  onCancel = () => this.setState({ isOpen: false });
  onOpen = () => this.setState({ isOpen: true });

  render() {
    return (
      <div>
        <GreenButton onClick={this.onOpen}>Добавить ученика</GreenButton>
        <PupilModal isOpen={this.state.isOpen} onCancel={this.onCancel} />
      </div>
    )
  }
}

export default AddPupil;
