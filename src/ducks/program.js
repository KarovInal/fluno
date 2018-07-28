import { fill } from 'lodash';
import { message } from 'antd';
import { formValueSelector, change } from 'redux-form';

export const createCompetitionSelector = formValueSelector('createCompetition');

export const removeColumn = programType => () => (dispatch, getState) => {
  const state = getState();
  let { columnCount, programData } = createCompetitionSelector(state, programType);

  if(columnCount <= 3) {
    return message.warn('Не возможно удалить все группы.');
  }

  // убираем последнюю колонку у всех строк
  const newProgramData = programData.map(data => {
    data.splice(columnCount - 1, 1);
    return data;
  });

  dispatch(change('createCompetition', `${programType}.columnCount`, columnCount - 1));
  dispatch(change('createCompetition', `${programType}.programData`, newProgramData));
}

export const addColumn = programType => () => (dispatch, getState) => {
  const state = getState();
  let { columnCount, programData } = createCompetitionSelector(state, programType);

  // добавляем новые колонки во все строки
  const newProgramData = programData.map(data => {
    data.push(null);
    return data;
  });

  dispatch(change('createCompetition', `${programType}.columnCount`, columnCount  + 1));
  dispatch(change('createCompetition', `${programType}.programData`, newProgramData));
};


export const addRow = programType => () => (dispatch, getState) => {
  const state = getState();
  let { rowCount, columnCount, programData } = createCompetitionSelector(state, programType);

  // Добавить новую пустую строку
  const newRow = fill(new Array(columnCount), null);

  programData.push(newRow);

  dispatch(change('createCompetition', `${programType}.rowCount`, rowCount + 1));
  dispatch(change('createCompetition', `${programType}.programData`, programData));
};

export const removeRow = programType => () => (dispatch, getState) => {
  const state = getState();
  let { rowCount, programData } = createCompetitionSelector(state, programType);

  if(rowCount <= 1) {
    return message.warn('Не возможно удалить все строки.');
  }

  // Удаляем последнюю строку
  programData.pop();

  dispatch(change('createCompetition', `${programType}.rowCount`, rowCount - 1));
  dispatch(change('createCompetition', `${programType}.programData`, programData));
};
