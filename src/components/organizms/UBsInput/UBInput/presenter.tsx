import { VFC } from 'react';
import { TextField } from '@material-ui/core';
import { UB } from 'ducks/tl';
import TimeInput from 'components/atoms/TimeInput';
import CommonMenu from 'components/atoms/CommonMenu';
import UBNameInput from './UBNameInput';

type Props = {
  ub: UB;
  upperBound: number;
  lowerBound: number;
  changeUBTime: (time: number) => void;
  changeUBName: () => void;
  changeUBComment: (comment: string) => void;
  insertUBPrev: () => void;
  insertUBNext: () => void;
  deleteThis: () => void;
};

const UBInput: VFC<Props> = ({
  ub,
  upperBound = 90,
  lowerBound = 0,
  changeUBTime = () => undefined,
  changeUBName = () => undefined,
  changeUBComment = () => undefined,
  insertUBPrev = () => undefined,
  insertUBNext = () => undefined,
  deleteThis = () => undefined,
}) => (
  <>
    <div className="flex items-center max-w-md group">
      <div className="flex flex-col items-center mr-1.5">
        <UBNameInput name={ub.name} changeUBName={changeUBName} />
        <TimeInput
          time={ub.time}
          upperBound={upperBound}
          lowerBound={lowerBound}
          changeTime={changeUBTime}
        />
      </div>
      <div className="flex flex-1 mb-3">
        <TextField
          margin="dense"
          size="small"
          fullWidth
          variant="outlined"
          multiline
          minRows={1}
          maxRows={5}
          value={ub.comment}
          onChange={(e) => changeUBComment(e.target.value)}
        />
      </div>
      <div className="mt-2 place-self-start">
        <CommonMenu
          menuItems={[
            {
              title: '新しい行を前行に挿入',
              func: insertUBPrev,
            },
            {
              title: '新しい行を次行に挿入',
              func: insertUBNext,
            },
            {
              title: 'この行を削除',
              func: deleteThis,
            },
          ]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </CommonMenu>
      </div>
    </div>
  </>
);

export default UBInput;
