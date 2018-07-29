import {
  PUPILS,
  PROFILE,
  STATISTICS,
  COMPETITIONS,
  COMPETITION_CREATE,
} from 'Constants/routes';

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

export const pathData = {
  [PUPILS]: {
    "text": "Мои ученики",
    "path": PUPILS,
    "icon": "/pupils.e1cb9718.svg"
  },
  [COMPETITIONS]: {
    "text": "Соревнования",
    "path": COMPETITIONS,
    "icon": "/competition.8a601934.svg"
  },
  [PROFILE]: {
    "text": "Профиль",
    "path": PROFILE,
    "icon": "/setting.a719c2c5.svg"
  },
  [STATISTICS]: {
    "text": "Статистика",
    "path": STATISTICS,
    "icon": "/statistic.47e34997.svg"
  },
  [COMPETITION_CREATE]: {
    "text": "Создание соревнования",
    "path": COMPETITION_CREATE,
    "icon": ""
  }
}

export default menuData;
