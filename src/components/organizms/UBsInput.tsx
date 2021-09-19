import { VFC } from 'react';
import { TextField } from '@material-ui/core';
import { UB } from '../../ducks/tl';
import { MAX_PHASE, MAX_DAMAGE, BOSSES_INFO } from '../../lib/gameConstants';
import UBInput from '../molecules/UBInput';

type Props = {
  ubs: UB[];
  startTime: number;
  endTime: number;
  changeStartTime: (time: number) => void;
  changeEndTime: (time: number) => void;
  changeUBTime: (index: number, time: number) => void;
  changeUBName: (index: number, name: string) => void;
  changeUBComment: (index: number, comment: string) => void;
};

const UBsInput: VFC<Props> = ({
  ubs,
  startTime,
  endTime,
  changeStartTime,
  changeEndTime,
  changeUBTime,
  changeUBName,
  changeUBComment,
}) => (
  <>
    <div>
      {ubs.map((ub, index) => (
        <UBInput ub={ub} key={`${ub.name}${ub.time}${ub.comment}`} />
      ))}
    </div>
  </>
);

export default UBsInput;
