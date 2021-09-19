import { VFC } from 'react';

type Props = {
  name?: string;
  changeUBName?: () => void;
};

const TimeInput: VFC<Props> = ({
  name = '',
  changeUBName = () => undefined,
}) => (
  <>
    <button type="button" onClick={changeUBName}>
      <img src={`/characters/${name}.png`} className="w-12 h-12" alt="" />
    </button>
  </>
);

export default TimeInput;
