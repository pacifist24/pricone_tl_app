import { VFC } from 'react';
import { Button } from '@material-ui/core';

type Props = {
  setIsCharacterSelectModalOpen: (val: boolean) => void;
};

const CharacterInput: VFC<Props> = ({ setIsCharacterSelectModalOpen }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={() => setIsCharacterSelectModalOpen(true)}
  >
    編成選択
  </Button>
);

export default CharacterInput;
