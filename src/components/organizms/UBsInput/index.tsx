import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
  selectTL,
  changeStartTime,
  changeEndTime,
  changeUBTime,
  changeUBName,
  changeUBComment,
  addUB,
} from '../../../ducks/tl';
import UBsInputComponent from './presenter';

const UBsInput: VFC = () => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);
  const toggeleUBName = (index: number) => () => {
    const candidateList = [
      ...tl.characters.map((character) => character.name),
      tl.bossName,
    ];
    const nowIndex = candidateList.indexOf(tl.timeline[index].name);
    const nextIndex = (nowIndex + 1) % candidateList.length;
    dispatch(changeUBName({ index, value: candidateList[nextIndex] }));
  };

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
        changeUBName={toggeleUBName}
        changeUBComment={(index, comment) =>
          dispatch(changeUBComment({ index, value: comment }))
        }
        addUB={(index, ub) => dispatch(addUB({ index, ub }))}
      />
    </>
  );
};

export default UBsInput;
