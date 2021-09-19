import { VFC } from 'react';
import { Button } from '@material-ui/core';
import { Character } from '../../ducks/tl';
import CharacterSelectModal from '../../container/molecules/CharacterSelectModal';
import CharacterInput from '../../container/molecules/CharacterInput';

type Props = {
  characters: Character[];
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const CharactersInput: VFC<Props> = ({ characters, isOpen, setIsOpen }) => (
  <>
    <div className="mb-2">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        編成選択
      </Button>
    </div>
    {characters.length < 5 && (
      <div className="text-gray-600">編成選択してください</div>
    )}
    {characters.length === 5 &&
      Array.from(Array(5).keys()).map((index) => (
        <CharacterInput index={index} key={characters[index].name} />
      ))}
    <CharacterSelectModal isOpen={isOpen} setIsOpen={setIsOpen} />
  </>
);

export default CharactersInput;
