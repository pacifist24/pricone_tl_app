import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
  selectTL,
  changePhase,
  changeDamage,
  changeBossName,
  changeComment,
  sanitizeUB,
} from 'ducks/tl';
import TLBasicDataInputComponent from './presenter';

const TLBasicDataInput: VFC = () => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);
  const handleChangeBossName = (bossName) => {
    dispatch(changeBossName(bossName));
    dispatch(sanitizeUB());
  };

  return (
    <>
      <TLBasicDataInputComponent
        tl={tl}
        changePhase={(phase) => dispatch(changePhase(phase))}
        changeDamage={(damage) => dispatch(changeDamage(damage))}
        changeBossName={handleChangeBossName}
        changeComment={(comment) => dispatch(changeComment(comment))}
      />
    </>
  );
};

export default TLBasicDataInput;
