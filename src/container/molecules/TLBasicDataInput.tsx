import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectTL,
  changePhase,
  changeDamage,
  changeBossName,
  changeComment,
} from '../../ducks/tl';
import TLBasicDataInputComponent from '../../components/molecules/TLBasicDataInput';

const TLBasicDataInput: VFC = () => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);

  return (
    <>
      <TLBasicDataInputComponent
        tl={tl}
        changePhase={(phase) => dispatch(changePhase(phase))}
        changeDamage={(damage) => dispatch(changeDamage(damage))}
        changeBossName={(bossName) => dispatch(changeBossName(bossName))}
        changeComment={(comment) => dispatch(changeComment(comment))}
      />
    </>
  );
};

export default TLBasicDataInput;
