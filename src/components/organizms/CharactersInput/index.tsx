import { VFC, useState } from 'react';
import { selectTL } from 'ducks/tl';
import { useAppSelector } from 'app/hooks';
import CharactersInputComponent from './presenter';

const CharactersInput: VFC = () => {
  const tl = useAppSelector(selectTL);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CharactersInputComponent
        characters={tl.characters}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default CharactersInput;
