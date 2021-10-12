import { VFC } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { CommonAlertState } from 'ducks/commonAlert';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

type Props = {
  commonAlertState: CommonAlertState;
  handleClose: () => void;
};

const CommonDialog: VFC<Props> = ({ commonAlertState, handleClose }) => (
  <Snackbar
    open={commonAlertState.isOpen}
    autoHideDuration={commonAlertState.duration}
    onClose={handleClose}
    anchorOrigin={commonAlertState.anchorOrigin}
  >
    <Alert onClose={handleClose} severity={commonAlertState.severity}>
      {commonAlertState.message}
    </Alert>
  </Snackbar>
);

export default CommonDialog;
