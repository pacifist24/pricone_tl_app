import { VFC } from 'react';
import { MAX_RANK } from 'lib/gameConstants';

type Props = {
  rank: number;
  changeCharacterRank: (rank: number) => void;
};

const CharacterRankInput: VFC<Props> = ({ rank, changeCharacterRank }) => (
  <select
    className="p-1 text-gray-600 appearance-none focus:outline-none"
    value={rank}
    onChange={(val) => changeCharacterRank(parseInt(val.target.value, 10))}
  >
    {Array.from(Array(MAX_RANK).keys())
      .map((val) => (
        <option value={val + 1} key={val}>
          R{val + 1}
        </option>
      ))
      .reverse()}
  </select>
);

export default CharacterRankInput;
