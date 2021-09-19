import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectTL,
  changeCharacterStar,
  changeCharacterLv,
  changeCharacterRank,
  changeCharacterSpecialLv,
  changeCharacterComment,
} from '../../ducks/tl';
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
        changeCharacterRank={(rank) =>
          dispatch(changeCharacterRank({ index, value: rank }))
        }
        changeCharacterSpecialLv={(specialLv) =>
          dispatch(changeCharacterSpecialLv({ index, value: specialLv }))
        }
        changeCharacterLv={(lv) =>
          dispatch(changeCharacterLv({ index, value: lv }))
        }
        changeCharacterComment={(comment) =>
          dispatch(changeCharacterComment({ index, value: comment }))
        }
      />
    </>
  );
};

export default CharacterInput;
