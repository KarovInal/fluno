import React, { Component } from 'react';
import SimpleBlock from 'Atoms/simple-block';

class LeftSide extends Component {
  render() {
    const { children } = this.props;

    return(
      <SimpleBlock>
        { children }
      </SimpleBlock>
    );
  }
}

export default LeftSide;
