import { VFC } from 'react';
import Button from '@material-ui/core/Button';
import CommonDialog from 'components/molecules/CommonDialog';

type Props = {
  title: string;
  text: string;
  onClose: () => void;
  buttons: {
    label: string;
    handleClick: () => void;
  }[];
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  onClick: () => void;
};

const PostTLButton: VFC<Props> = ({
  title,
  text,
  buttons,
  isOpen,
  setIsOpen,
  onClose,
  onClick,
}) => (
  <div className="w-11/12 mx-auto">
    <Button
      variant="contained"
      color="primary"
      className="w-full"
      onClick={onClick}
    >
      TLを保存/公開する
    </Button>
    <CommonDialog
      title={title}
      text={text}
      buttons={buttons}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      onClose={onClose}
    />
  </div>
);

export default PostTLButton;
