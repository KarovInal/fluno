import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { times, get } from 'lodash';
import styled from 'styled-components';
import { Row, Col, Icon, Button } from 'antd';
import { FieldArray, formValues } from 'redux-form';
import { KindIcon } from 'Atoms/icon';
import SelectField from 'Atoms/select-field';
import { GreenButton, RedButton } from 'Atoms/buttons';
import { RegularText } from 'Atoms/fonts';
import { removeColumn, addColumn, addRow, removeRow, createCompetitionSelector } from 'Ducks/program';
import ranksForSelector from 'Selectors/normalize/ranks-for-selector';
import kindsForSelector from 'Selectors/normalize/kinds-for-selector';
import AVAILABLE_AGES_PUPIL from 'Constants/available-age-pupils';
import { GROUP_PROGRAM, INDIVIDUAL_PROGRAM } from 'Constants/program';
const ButtonGroup = Button.Group;

const BorderWrap = styled.div`
  border: solid 1px #DEE3E1;
  height: 100%;
`;

const stateToProps = (state, ownProps) => {
  return {
    ranksForSelector: ranksForSelector(state),
    kindsForSelector: kindsForSelector(state),
    programData: createCompetitionSelector(state, ownProps.type)
  }
};

const dispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addRow: addRow(ownProps.type),
  removeRow: removeRow(ownProps.type),
  addColumn: addColumn(ownProps.type),
  removeColumn: removeColumn(ownProps.type),
}, dispatch);

@connect(stateToProps, dispatchToProps)
class ProgramCompetition extends Component {
  columnNames = [
    {
      title: 'Дата рождения',
      component: fieldName => <SelectField style={{ margin: '0px' }} name={fieldName} selectorValues={AVAILABLE_AGES_PUPIL} />
    },
    {
      title: 'Разряд',
      component: fieldName => <SelectField style={{ margin: '0px' }} name={fieldName} selectorValues={this.props.ranksForSelector} />
    }
  ];

  renderTypeProgram = () => {
    if(this.props.type === GROUP_PROGRAM) return <RegularText light>Групповая программа</RegularText>;
    if(this.props.type === INDIVIDUAL_PROGRAM) return <RegularText light>Индивидуальная программа</RegularText>;
    return  '';
  };

  renderColumns = () => {
    const { columnCount } = this.props.programData;

    return (
      <Row type='flex' style={{flexWrap: 'nowrap'}}>
        {
          times(columnCount, index => {
            return (
              <Col key={index} style={{ width: '100%', backgroundColor: '#f9fafa' }}>
                <BorderWrap>
                  <RegularText style={{ lineHeight: '40px', textAlign: 'center' }}>
                    {
                      get(this.columnNames, [index, 'title'], `Группа ${index - 1}`)
                    }
                  </RegularText>
                </BorderWrap>
              </Col>
            )
          })
        }
      </Row>
    );
  };

  renderControls = () => (
    <Fragment>
      <ButtonGroup>
        Группы:
        <GreenButton onClick={() => this.props.addColumn()}>
          <Icon type='plus' />
        </GreenButton>
        <RedButton onClick={() => this.props.removeColumn()}>
          <Icon type='minus' />
        </RedButton>
      </ButtonGroup>
      <ButtonGroup>
        Строки:
        <GreenButton onClick={() => this.props.addRow()}>
          <Icon type='plus' />
        </GreenButton>
        <RedButton onClick={() => this.props.removeRow()}>
          <Icon type='minus' />
        </RedButton>
      </ButtonGroup>
    </Fragment>
  )

  renderProgramRow = ({fields}) => {
    return (
      <Row type='flex' style={{flexWrap: 'nowrap', width: '100%'}}>
        {
          fields.map((fieldName, index) => {
            return (
              <Col key={index} style={{ width: '100%' }}>
                <BorderWrap>
                  {
                    get(this.columnNames, [index, 'component'])
                      ? this.columnNames[index].component(fieldName)
                      : <SelectField
                          mode='multiple'
                          name={fieldName}
                          selectorValues={this.props.kindsForSelector}
                          customLabel={({ icon }) => <KindIcon src={icon} />}
                        />
                  }
                </BorderWrap>
              </Col>
            );
          })
        }
      </Row>
    )
  };

  renderProgram = ({fields}) => (
    <Row type='flex'>
      {
        fields.map((fieldName, index) => (
          <FieldArray name={fieldName} component={this.renderProgramRow} key={index} />
        ))
      }
    </Row>
  )

  render() {
    const { type } = this.props;
    const fieldArrayName = `${type}.programData`;

    return(
      <div className='program-wrap'>
        { this.renderTypeProgram() }
        { this.renderControls() }
        { this.renderColumns() }
        <FieldArray name={fieldArrayName} component={this.renderProgram} />
      </div>
    )
  }
}

export default ProgramCompetition;
