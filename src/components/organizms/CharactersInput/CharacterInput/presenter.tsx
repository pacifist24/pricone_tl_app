import { VFC } from 'react';
import CharacterStarInput from './CharacterStarInput';
import CharacterLvInput from './CharacterLvInput';
import CharacterLvRank from './CharacterRankInput';
import CharacterSpecialLvInput from './CharacterSpecialLvInput';
import CharacterCommentInput from './CharacterCommentInput';

type Props = {
  index: number;
  name: string;
};

const CharacterInput: VFC<Props> = ({ index, name }) => (
  <div className="flex items-center rounded-md">
    <img src={`/characters/${name}.png`} className="m-1 w-11 h-11" alt="" />
    <CharacterStarInput index={index} />
    <CharacterLvRank index={index} />
    <CharacterSpecialLvInput index={index} />
    <CharacterLvInput index={index} />
    <CharacterCommentInput index={index} />
  </div>
);

export default CharacterInput;
