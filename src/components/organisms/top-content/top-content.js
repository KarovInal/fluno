import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import { pathData } from 'Constants/menu-data';
import { Icon, Row, Col } from 'antd';
import { SimpleEmptyBlock } from 'Atoms/simple-block';
import SimpleLine from 'Atoms/simple-line';
import { CaptionText } from 'Atoms/fonts';

@withRouter
class TopContent extends Component {
  static propTypes = {
    showBackButton: PropTypes.bool,
    title: PropTypes.string
  };

  static defaultProps = {
    showBackButton: true
  };

  renderBackButton = () => {
    return (
      <Icon
        type='left'
        onClick={ this.props.history.goBack }
        style={{ fontWeight: 'bolder', color: '#676B69', cursor: 'pointer', marginRight: '12px' }}
      />
    );
  };

  getPageTitle = () => {
    if(this.props.title) {
      return this.props.title;
    }

    return get(pathData, [this.props.match.path, 'text'], 'Страницы не существует');
  };

  renderLeftContent = () => {
    return (
      this.props.leftContent
        ? this.props.leftContent
        : (
          <Fragment>
            { this.props.showBackButton && this.renderBackButton() }
            <CaptionText style={{ display: 'inline-block' }}>
              { this.getPageTitle() }
            </CaptionText>
          </Fragment>
        )
    );
  };

  render() {
    return (
      <SimpleEmptyBlock height='60px' style={{ marginBottom: '30px' }}>
        <Row type='flex' align='middle' style={{ height: '100%' }}>
          <Col span={12}>
            { this.renderLeftContent() }
          </Col>
          <Col span={12}>
            <Row type='flex' align='middle' justify='end' style={{ height: '100%' }}>
              { this.props.children }
            </Row>
          </Col>
        </Row>
        <SimpleLine />
      </SimpleEmptyBlock>
    );
  }
}

export default TopContent;
