import { VFC, useState } from 'react';
import { Character } from '../../ducks/tl';
import CharacterSelectModal from '../../container/molecules/CharacterSelectModal';

const CharacterInput: VFC<{ character: Character }> = ({ character }) => (
  <div className="flex rounded-md">
    <img
      src={`/characters/${character.name}.png`}
      className="m-1 w-11 h-11"
      alt=""
    />
    <select className="p-1 text-gray-600 appearance-none focus:outline-none">
      <option value="1">★1</option>
      <option value="2">★2</option>
      <option value="3">★3</option>
    </select>
  </div>
);

type Props = {
  characters: Character[];
};

const CharactersInput: VFC<Props> = ({ characters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {characters.map((character) => (
        <CharacterInput character={character} key={character.name} />
      ))}
      <CharacterSelectModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button type="button" onClick={() => setIsOpen(true)}>
        open
      </button>
    </div>
  );
};

export default CharactersInput;
