import { VFC } from 'react';
import { Character } from '../../ducks/tl';
import CharacterSelectModal from '../../container/molecules/CharacterSelectModal';
import CharacterInput from '../../container/molecules/CharacterInput';

type Props = {
  characters: Character[];
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const CharactersInput: VFC<Props> = ({ characters, isOpen, setIsOpen }) => (
  <div className="">
    {characters.length === 5 &&
      Array.from(Array(5).keys()).map((index) => (
        <CharacterInput index={index} key={characters[index].name} />
      ))}
    <CharacterSelectModal isOpen={isOpen} setIsOpen={setIsOpen} />
    <button type="button" onClick={() => setIsOpen(true)}>
      open
    </button>
  </div>
);

export default CharactersInput;
