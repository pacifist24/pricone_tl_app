import { VFC } from 'react';
import CommonDialogComponent from './presenter';

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
};
const CommonDialog: VFC<Props> = ({
  title,
  text,
  buttons,
  isOpen,
  setIsOpen,
  onClose,
}) => (
  <>
    <CommonDialogComponent
      title={title}
      text={text}
      buttons={buttons}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={onClose}
    />
  </>
);
export default CommonDialog;
