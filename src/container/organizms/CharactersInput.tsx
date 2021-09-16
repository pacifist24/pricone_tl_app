import { VFC, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTL } from '../../ducks/tl';
import CharactersInputComponent from '../../components/organizms/CharactersInput';

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
