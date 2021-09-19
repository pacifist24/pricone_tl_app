import { VFC } from 'react';
import { Character } from '../../ducks/tl';
import { CHARACTERS_INFO } from '../../lib/gameConstants';
import CharacterStarInput from '../atoms/CharacterStarInput';
import CharacterLvInput from '../atoms/CharacterLvInput';
import CharacterLvRank from '../atoms/CharacterRankInput';
import CharacterSpecialLvInput from '../atoms/CharacterSpecialLvInput';
import CharacterCommentInput from '../atoms/CharacterCommentInput';

type Props = {
  character: Character;
  changeCharacterStar: (star: number) => void;
  changeCharacterLv: (lv: number) => void;
  changeCharacterRank: (rank: number) => void;
  changeCharacterSpecialLv: (specialLv: number) => void;
  changeCharacterComment: (comment: string) => void;
};

const CharacterInput: VFC<Props> = ({
  character,
  changeCharacterStar,
  changeCharacterLv,
  changeCharacterRank,
  changeCharacterSpecialLv,
  changeCharacterComment,
}) => (
  <div className="flex items-center rounded-md">
    <img
      src={`/characters/${character.name}.png`}
      className="m-1 w-11 h-11"
      alt=""
    />
    <CharacterStarInput
      star={character.star}
      maxStar={CHARACTERS_INFO[character.name].maxStar}
      changeCharacterStar={changeCharacterStar}
    />
    <CharacterLvRank
      rank={character.rank}
      changeCharacterRank={changeCharacterRank}
    />
    <CharacterSpecialLvInput
      specialLv={character.specialLv}
      changeCharacterSpecialLv={changeCharacterSpecialLv}
    />
    <CharacterLvInput lv={character.lv} changeCharacterLv={changeCharacterLv} />
    <CharacterCommentInput
      comment={character.comment}
      changeCharacterComment={changeCharacterComment}
    />
  </div>
);

export default CharacterInput;
