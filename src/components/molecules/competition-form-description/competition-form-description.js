import React, { Component, Fragment } from 'react';
import SectionTitle from 'Atoms/section-title';
import TextField from 'Atoms/text-field';
import DateField from 'Atoms/date-field';
import UploadPhoto from 'Molecules/upload-photo';
import UploadDocument from 'Molecules/upload-document';

class CompetitionFormDescription extends Component {
  render() {
    return (
      <Fragment>
        <SectionTitle title='Описание' />
        <UploadPhoto title='Обложка' name='coverCompetition' />
        <TextField required name='nameCompetition' placeholder='Название соревнования' fieldTitle='Название соревнования' />
        <DateField required name='dateStartCompetition' placeholder='Выберите дату' fieldTitle='Дата начала соревнования' />
        <DateField required name='deadlineCompetition' placeholder='Выберите дату' fieldTitle='Дата окончания примема заявок' />
        <TextField required name='addressCompetition' placeholder='Точный адрес' fieldTitle='Точный адрес' />
        <TextField required name='countryCompetition' placeholder='Страна' fieldTitle='Страна' />
        <TextField required name='cityCompetition' placeholder='Город' fieldTitle='Город' />
        <UploadDocument name='documentCompetition' />
      </Fragment>
    );
  }
}

export default CompetitionFormDescription;
