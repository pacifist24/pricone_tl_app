import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTL } from '../../ducks/tl';
import CharactersPanelComponent from '../../components/organizms/CharactersInput';

const CharactersPanel: VFC = () => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);

  return (
    <>
      <CharactersPanelComponent characters={tl.characters} />
    </>
  );
};

export default CharactersPanel;
