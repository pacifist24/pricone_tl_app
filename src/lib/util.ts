import { CHARACTERS_INFO, MAX_SPECIAL_LV } from './gameConstants';

/** 01:20⇒80のように分秒表記を秒に変更 */
export const timeStr2Num = (timeStr: string): number =>
  parseInt(timeStr.substr(0, 2), 10) * 60 + parseInt(timeStr.substr(3, 2), 10);

/** 80⇒01:20のように秒を分秒表記に変更 */
export const timeNum2Str = (timeNum: number): string => {
  const min = Math.floor(timeNum / 60);
  const sec = timeNum % 60;

  return `${`00${min}`.slice(-2)}:${`00${sec}`.slice(-2)}`;
};

/** キャラ名から専用装備の有無を確認し、専用レベルのデフォルト値を返す */
export const getDefaultSpecialLv = (name: string): number => {
  if (CHARACTERS_INFO[name] && CHARACTERS_INFO[name].hasSpecial) {
    return MAX_SPECIAL_LV;
  }

  return 0;
};
