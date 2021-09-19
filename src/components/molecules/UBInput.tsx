import { VFC } from 'react';
import { TextField } from '@material-ui/core';
import { UB } from '../../ducks/tl';
import { MAX_PHASE, MAX_DAMAGE, BOSSES_INFO } from '../../lib/gameConstants';
import TimeInput from '../atoms/TimeInput';
import UBNameInput from '../atoms/UBNameInput';

type Props = {
  ub: UB;
  changeUBTime?: (time: number) => void;
  changeUBName?: (name: string) => void;
  changeUBComment?: (comment: string) => void;
};

const UBInput: VFC<Props> = ({
  ub,
  changeUBTime = () => undefined,
  changeUBName = () => undefined,
  changeUBComment = () => undefined,
}) => (
  <>
    <div className="flex items-center max-w-md">
      <div className="flex flex-col mr-1">
        <UBNameInput name={ub.name} />
        <TimeInput time={ub.time} />
      </div>
      <div className="flex-1 mb-3">
        <TextField
          margin="dense"
          size="small"
          className="w-11/12"
          variant="outlined"
          multiline
          minRows={1}
          maxRows={5}
          value={ub.comment}
          onChange={(e) => changeUBComment(e.target.value)}
        />
      </div>
    </div>
  </>
);

export default UBInput;
