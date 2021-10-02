import { VFC, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectTL, selectCharacters, sanitizeUB } from 'ducks/tl';
import { CHARACTERS_INFO, MAX_LV, MAX_RANK } from 'lib/gameConstants';
import { getDefaultSpecialLv } from 'lib/util';
import CharacterSelectModalComponent from './presenter';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const CharacterSelectModal: VFC<Props> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);

  const [tempSelectedCharacters, setTempSelectedCharacters] = useState<
    string[]
  >([]);

  useEffect(() => {
    setTempSelectedCharacters(
      tl.characters
        .filter((character) => character.name !== '')
        .map((character) => character.name),
    );
  }, [tl.characters]);

  const toggleIsSelected = (name: string, isSelectedNow: boolean) => {
    if (isSelectedNow) {
      // 対象キャラクターが現在選択しているなら選択を外す処理
      setTempSelectedCharacters(
        tempSelectedCharacters.filter((val) => val !== name),
      );
    } else if (tempSelectedCharacters.length < 5) {
      // 未選択かつ5キャラ選択されていなければキャラを選択する
      setTempSelectedCharacters([...tempSelectedCharacters, name]);
    }
  };

  const handleOK = () => {
    if (tempSelectedCharacters.length < 5) {
      // eslint-disable-next-line no-alert
      alert('5キャラ選択してください');
    } else {
      dispatch(
        selectCharacters(
          tempSelectedCharacters
            .map((name) => ({
              name,
              star: CHARACTERS_INFO[name].maxStar,
              lv: MAX_LV,
              rank: MAX_RANK,
              specialLv: getDefaultSpecialLv(name),
              comment: '',
            }))
            .sort(
              (a, b) =>
                CHARACTERS_INFO[a.name].position -
                CHARACTERS_INFO[b.name].position,
            ),
        ),
      );
      dispatch(sanitizeUB());
      setIsOpen(false);
    }
  };

  return (
    <>
      <CharacterSelectModalComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tempSelectedCharacters={tempSelectedCharacters}
        toggleIsSelected={toggleIsSelected}
        handleOK={handleOK}
      />
    </>
  );
};

export default CharacterSelectModal;
