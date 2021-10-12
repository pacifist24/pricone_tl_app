import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectCommonAlertState, closeAlert } from 'ducks/commonAlert';
import CommonAlertComponent from './presenter';

const CommonAlert: VFC = () => {
  const dispatch = useAppDispatch();
  const commonAlertState = useAppSelector(selectCommonAlertState);
  const handleClose = () => {
    dispatch(closeAlert());
  };

  return (
    <CommonAlertComponent
      commonAlertState={commonAlertState}
      handleClose={handleClose}
    />
  );
};
export default CommonAlert;
