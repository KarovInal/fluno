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

export const pathData = {
  "/pupils": {
    "text": "Мои ученики",
    "path": "/pupils",
    "icon": "/pupils.e1cb9718.svg"
  },
  "/competitions": {
    "text": "Соревнования",
    "path": "/competitions",
    "icon": "/competition.8a601934.svg"
  },
  "/profile": {
    "text": "Профиль",
    "path": "/profile",
    "icon": "/setting.a719c2c5.svg"
  },
  "/statistics": {
    "text": "Статистика",
    "path": "/statistics",
    "icon": "/statistic.47e34997.svg"
  },
  "/create-competition": {
    "text": "Создание соревнования",
    "path": "/create-competition",
    "icon": ""
  }
}

export default menuData;
