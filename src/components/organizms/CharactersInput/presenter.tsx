import { VFC } from 'react';
import { Character } from 'ducks/tl';
import CharacterInput from './CharacterInput';

type Props = {
  characters: Character[];
};

const CharactersInput: VFC<Props> = ({ characters }) => (
  <>
    {Array.from(Array(5).keys()).map((index) => (
      <CharacterInput index={index} key={characters[index].name} />
    ))}
  </>
);

export default CharactersInput;
