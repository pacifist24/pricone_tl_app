import { VFC } from 'react';
import { Character } from '../../ducks/tl';
import {
  CHARACTERS_INFO,
  MAX_LV,
  MAX_RANK,
  MAX_SPECIAL_LV,
} from '../../lib/gameConstants';

type Props = {
  character: Character;
  changeCharacterStar: (star: number) => void;
};

const CharacterInput: VFC<Props> = ({ character, changeCharacterStar }) => (
  <div className="flex rounded-md">
    <img
      src={`/characters/${character.name}.png`}
      className="m-1 w-11 h-11"
      alt=""
    />
    <select
      className="p-1 text-gray-600 appearance-none focus:outline-none"
      value={character.star}
      onChange={(val) => changeCharacterStar(parseInt(val.target.value, 10))}
    >
      {Array.from(Array(CHARACTERS_INFO[character.name].maxStar).keys())
        .map((star) => (
          <option value={star + 1} key={star}>
            ★{star + 1}
          </option>
        ))
        .reverse()}
    </select>
  </div>
);

export default CharacterInput;
