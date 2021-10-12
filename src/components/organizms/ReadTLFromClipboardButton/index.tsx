import { VFC, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { loadTL, selectIsCharactersInputVisible } from 'ducks/tl';
import { changeStartTime } from 'ducks/style';
import { openAlert } from 'ducks/commonAlert';
import parseTlData from 'lib/tLParser';
import ReadTLFromClipboardButtonComponent from './presenter';

const ReadTLFromClipboardButton: VFC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const title = 'クリップボードからTLを読み込み';
  const text =
    'クリップボードからTLを読み込んだ場合、今までの入力は全て破棄されますがよろしいですか？';
  const onClose = () => undefined;

  const dispatch = useAppDispatch();
  const handleClickOK = () => {
    navigator.clipboard
      .readText()
      .then((clipText) => {
        const tlData = parseTlData(clipText);
        if (tlData) {
          dispatch(loadTL(tlData));
          dispatch(changeStartTime(tlData.startTime));
        } else {
          dispatch(
            openAlert({
              message: 'TLの解析に失敗しました',
              severity: 'error',
              duration: 3000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
              },
            }),
          );
        }
      })
      .catch(() => undefined);
  };

  const buttons = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: 'OK',
      handleClick: handleClickOK,
    },
  ];

  const exitInput = useAppSelector(selectIsCharactersInputVisible);
  const onClick = () => {
    if (exitInput) {
      setIsDialogOpen(true);
    } else {
      handleClickOK();
    }
  };

  return (
    <>
      <ReadTLFromClipboardButtonComponent
        title={title}
        text={text}
        buttons={buttons}
        setIsOpen={setIsDialogOpen}
        isOpen={isDialogOpen}
        onClose={onClose}
        onClick={onClick}
      />
    </>
  );
};
export default ReadTLFromClipboardButton;
