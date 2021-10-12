import { VFC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectStartTime, changeStartTime } from 'ducks/style';
import ConfigStartTimeInputComponent from './presenter';

const ConfigStartTimeInput: VFC = () => {
  const dispatch = useAppDispatch();
  const handleChangeStartTime = (time: number) => {
    dispatch(changeStartTime(time));
  };
  const startTime = useAppSelector(selectStartTime);

  return (
    <>
      <ConfigStartTimeInputComponent
        startTime={startTime}
        changeStartTime={handleChangeStartTime}
      />
    </>
  );
};
export default ConfigStartTimeInput;
