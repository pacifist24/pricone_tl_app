import { VFC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectTL } from 'ducks/tl';
import { openAlert } from 'ducks/commonAlert';
import storeTL from 'lib/firestoreAccesser';
import PostTLButtonComponent from './presenter';

const PostTLButton: VFC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const tlData = useAppSelector(selectTL);
  const onClose = () => undefined;
  const dispatch = useAppDispatch();

  const buttons = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: 'OK',
      handleClick: () => {
        dispatch(
          openAlert({
            message: 'TLを保存/公開しました',
            severity: 'success',
            duration: 3000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          }),
        );
        storeTL(tlData);
      },
    },
  ];

  const onClick = () => setIsDialogOpen(true);

  return (
    <>
      <PostTLButtonComponent
        title="サーバーにTLを保存"
        text="サーバーにTLを保存し一般公開してもよろしいですか？秘匿のTLは保存しないでください。"
        buttons={buttons}
        setIsOpen={setIsDialogOpen}
        isOpen={isDialogOpen}
        onClose={onClose}
        onClick={onClick}
      />
    </>
  );
};
export default PostTLButton;
