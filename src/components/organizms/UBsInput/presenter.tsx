import { VFC } from 'react';
import { UB } from 'ducks/tl';
import TimeInput from 'components/atoms/TimeInput';
import CommonMenu from 'components/atoms/CommonMenu';
import UBInput from './UBInput';

type Props = {
  ubs: UB[];
  startTime: number;
  endTime: number;
  changeStartTime: (time: number) => void;
  changeEndTime: (time: number) => void;
  insertUBFirst: () => void;
};

const UBsInput: VFC<Props> = ({
  ubs,
  startTime,
  endTime,
  changeStartTime,
  changeEndTime,
  insertUBFirst,
}) => (
  <>
    <>
      <div className="flex items-center mb-5 font-bold">
        ---{' '}
        <span className="mr-1">
          <TimeInput
            time={startTime}
            upperBound={90}
            lowerBound={ubs.length === 0 ? endTime : ubs[0].time}
            changeTime={changeStartTime}
          />
        </span>
        バトル開始 ---
        <CommonMenu
          menuItems={[
            {
              title: '先頭に新しい行を挿入',
              func: insertUBFirst,
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
      {ubs.map((ub, index) => (
        <UBInput index={index} key={ub.id} />
      ))}
      <div className="mt-2 font-bold">
        ---{' '}
        <span className="mr-1">
          <TimeInput
            time={endTime}
            upperBound={ubs.length === 0 ? startTime : ubs[ubs.length - 1].time}
            lowerBound={0}
            changeTime={changeEndTime}
          />
        </span>
        バトル終了 ---
      </div>
    </>
  </>
);

export default UBsInput;
