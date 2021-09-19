// 01:20⇒80のように分秒表記を秒に変更
export const timeStr2Num = (timeStr: string): number =>
  parseInt(timeStr.substr(0, 2), 10) * 60 + parseInt(timeStr.substr(3, 2), 10);

// 80⇒01:20のように秒を分秒表記に変更
export const timeNum2Str = (timeNum: number): string => {
  const min = Math.floor(timeNum / 60);
  const sec = timeNum % 60;

  return `${`00${min}`.slice(-2)}:${`00${sec}`.slice(-2)}`;
};
