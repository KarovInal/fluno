import { PUPILS, COMPETITIONS, PROFILE, STATISTICS } from 'Constants/routes';

import pupilsIcon from 'Assets/img/pupils.svg';
import competitionIcon from 'Assets/img/competition.svg';
import settingIcon from 'Assets/img/setting.svg';
import statisticIcon from 'Assets/img/statistic.svg';

const menuData = [
  {
    text: 'Мои ученики',
    path: PUPILS,
    icon: pupilsIcon
  },
  {
    text: 'Соревнования',
    path: COMPETITIONS,
    icon: competitionIcon
  },
  {
    text: 'Профиль',
    path: PROFILE,
    icon: settingIcon
  },
  {
    text: 'Статистика',
    path: STATISTICS,
    icon: statisticIcon
  }
];

export default menuData;
