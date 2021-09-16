import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTL, Character, changeCharacterStar } from '../../ducks/tl';
import CharacterInputComponent from '../../components/molecules/CharacterInput';

type Props = {
  index: number;
};

const CharacterInput: VFC<Props> = ({ index }) => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);

  return (
    <>
      <CharacterInputComponent
        character={tl.characters[index]}
        changeCharacterStar={(star) =>
          dispatch(changeCharacterStar({ index, value: star }))
        }
      />
    </>
  );
};

export default CharacterInput;
