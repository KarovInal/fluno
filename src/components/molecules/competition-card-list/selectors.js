import moment from 'moment';

export const isAvailableDateSelector = ({ deadlineCompetition }) => {
  const isAvailable = moment().isBefore(moment(deadlineCompetition).format());

  return {
    isAvailableDate: isAvailable
  };
};

export const formatDateStartCompetition = ({ dateStartCompetition }) => ({
  dateStartCompetition: moment(dateStartCompetition).format('MM.DD.YYYY')
});
