import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectTL,
  changeStartTime,
  changeEndTime,
  changeUBTime,
  changeUBName,
  changeUBComment,
} from '../../ducks/tl';
import UBsInputComponent from '../../components/organizms/UBsInput';

const UBsInput: VFC = () => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);

  return (
    <>
      <UBsInputComponent
        ubs={tl.timeline}
        startTime={tl.startTime}
        endTime={tl.endTime}
        changeStartTime={(time) => dispatch(changeStartTime(time))}
        changeEndTime={(time) => dispatch(changeEndTime(time))}
        changeUBTime={(index, time) =>
          dispatch(changeUBTime({ index, value: time }))
        }
        changeUBName={(index, name) =>
          dispatch(changeUBName({ index, value: name }))
        }
        changeUBComment={(index, comment) =>
          dispatch(changeUBComment({ index, value: comment }))
        }
      />
    </>
  );
};

export default UBsInput;
