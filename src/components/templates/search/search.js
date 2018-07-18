import React, { Component } from 'react';
import Search from 'antd/lib/input/Search';

const searchStyle = {
  height: '30px',
  width: '100%',
};

class SearchWrap extends Component {
  render() {
    return <Search {...this.props} style={ searchStyle } />;
  }
}

export default SearchWrap;
