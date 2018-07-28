import React, { Component, Fragment } from 'react';
import { FieldArray } from 'redux-form';
import { get } from 'lodash';
import moment from 'moment';
import { Icon, Timeline } from 'antd';
import SectionTitle from 'Atoms/section-title';
import TimelineEdit from 'Atoms/timeline-edit';
import { BoldText, RegularText, DescriptionText } from 'Atoms/fonts';

const emptyTimeline = {
  times: [{ time: '', text: '' }]
};

class CompetitionTimeline extends Component {
  state = {
    isOpenTimelineEdit: false,
    currentEditTimeline: ''
  };

  renderDot = (type = 'calendar') => <Icon type={type} style={{ fontSize: '25px', color: '#a9acaa' }} />;

  onAddTimeline = fields => {
    const { meta: { field, index } } = fields.insert(fields.length, emptyTimeline);
    const nextIndex = `${field}[${index}]`;
    this.setState({ isOpenTimelineEdit: true, currentEditTimeline: nextIndex });
  };

  editTimeline = fieldIndex => {
    this.setState({ isOpenTimelineEdit: true, currentEditTimeline: fieldIndex });
  }

  onCloseTimeline = () => {
    this.setState({ isOpenTimelineEdit: false, currentEditTimeline: '' });
  };

  renderTimes = ({ fields, removeParrentField, editParrentField }) => {
    return (
      <div>
        {
          fields.map((name, index, field) => {
            const fieldData = field.get(index);

            let timelineTime = get(fieldData, 'time', ''),
                timelineText = get(fieldData, 'text', '');

            if(timelineTime instanceof moment) {
              timelineTime = timelineTime.format('L');
            }

            return (
              <div key={index} style={{ marginLeft: '15px' }}>
                <BoldText inline light>{`${timelineTime} - `}</BoldText>
                <RegularText inline light>{timelineText}</RegularText>
                {
                  index === 0 && (
                    <div>
                      <Icon
                        type='delete'
                        onClick={() => removeParrentField() } 
                        style={{ fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      />
                      <Icon
                        type='edit'
                        onClick={() => editParrentField() } 
                        style={{ fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      />
                    </div>
                  )
                }
              </div>
            );
          })
        }
      </div>
    );
  };

  renderTimeline = ({ fields }) => {
    return (
      <div>
        {
          fields.map((timeline, index, { remove }) => {
            return (
              <Timeline.Item key={index} dot={this.renderDot()}>
                <FieldArray
                  name={`${timeline}.times`}
                  removeParrentField={() => remove(index)}
                  editParrentField={() => this.editTimeline(timeline)}
                  component={this.renderTimes}
                />
              </Timeline.Item>
            );
          })
        }
        <Timeline.Item dot={this.renderDot('plus-circle-o')} onClick={() => this.onAddTimeline(fields)}>
          <DescriptionText style={{ cursor: 'pointer', lineHeight: '25px', marginLeft: '15px' }}>
            (новая дата)
          </DescriptionText>
        </Timeline.Item>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <SectionTitle title='Расписание соревнований' description='Информация о начале соревнований и конце, а также о событиях которые будут происходить в эти даты и часы.' />
        <FieldArray name="timelines" component={this.renderTimeline} />
        <TimelineEdit
          onCloseTimeline={this.onCloseTimeline}
          timeline={this.state.currentEditTimeline}
          isOpenTimelineEdit={this.state.isOpenTimelineEdit}
        />
      </Fragment>
    );
  }
}

export default CompetitionTimeline;
