import moment from 'moment';
import DATE_FORMAT from './../constants';

export const getSortedComments = (comments, isAscending = true) =>
  comments.sort((comment1, comment2) => {
    const x = moment(comment1.dates.created.date_time, DATE_FORMAT);
    const y = moment(comment2.dates.created.date_time, DATE_FORMAT);
    let sortCondition = 0;

    if (x < y) {
      sortCondition = -1;
    }

    if (x > y) {
      sortCondition = 1;
    }

    return (isAscending ? 1 : -1) * sortCondition;
  });

export const getRelativeDateString = (timeStr, format = DATE_FORMAT) =>
  moment(timeStr, format).fromNow();
