import { VFC } from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  comment: string;
  changeCharacterComment: (comment: string) => void;
};

const CharacterCommentInput: VFC<Props> = ({
  comment,
  changeCharacterComment,
}) => (
  <div className="mx-4">
    <TextField
      label="装備状況等"
      variant="outlined"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      className="w-48"
      value={comment}
      onChange={(e) => changeCharacterComment(e.target.value)}
    />
  </div>
);

export default CharacterCommentInput;
