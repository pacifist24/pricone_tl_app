import { VFC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  <div>
    <Dialog
      open={isOpen}
      onClose={() => {
        onClose();
        setIsOpen(false);
      }}
      aria-labelledby="form-dialog-title2"
    >
      <DialogTitle id="form-dialog-title2">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons.map((button) => (
          <Button
            onClick={() => {
              button.handleClick();
              setIsOpen(false);
            }}
            key={button.label}
            color="primary"
          >
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  </div>
);

export default CommonDialog;
