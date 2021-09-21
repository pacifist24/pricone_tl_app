import { VFC } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { TLState } from 'ducks/tl';
import { MAX_PHASE, MAX_DAMAGE, BOSSES_INFO } from 'lib/gameConstants';

type Props = {
  tl: TLState;
  changePhase: (phase: number) => void;
  changeDamage: (damage: number) => void;
  changeBossName: (bossName: string) => void;
  changeComment: (comment: string) => void;
};

const TLBasicDataInput: VFC<Props> = ({
  tl,
  changePhase,
  changeDamage,
  changeBossName,
  changeComment,
}) => (
  <>
    <div className="flex items-center">
      <div className="mr-1">
        <TextField
          label="段階"
          variant="outlined"
          size="small"
          type="number"
          inputProps={{ min: 1, max: MAX_PHASE }}
          className="w-14"
          value={tl.phase}
          onChange={(e) => {
            if (
              !Number.isNaN(parseInt(e.target.value, 10)) &&
              Number.isInteger(parseInt(e.target.value, 10))
            ) {
              changePhase(parseInt(e.target.value, 10));
            }
          }}
        />
      </div>
      <div className="mr-3">段階目</div>
      <div className="mr-4">
        <FormControl size="small" variant="outlined" className="w-48">
          <InputLabel>ボス名</InputLabel>
          <Select
            value={tl.bossName}
            label="ボス名"
            onChange={(e) => changeBossName(e.target.value as string)}
          >
            {Object.keys(BOSSES_INFO).map((name) => (
              <MenuItem value={name} key={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
    <div className="flex items-center mt-5">
      <div className="mr-1">
        <TextField
          label="ダメージ"
          variant="outlined"
          size="small"
          type="number"
          inputProps={{
            min: 0,
            max: Math.floor(MAX_DAMAGE / 10000),
            step: 100,
          }}
          className="w-24"
          value={tl.damage}
          onChange={(e) => {
            if (
              !Number.isNaN(parseInt(e.target.value, 10)) &&
              Number.isInteger(parseInt(e.target.value, 10))
            ) {
              changeDamage(parseInt(e.target.value, 10));
            }
          }}
        />
      </div>
      万
    </div>
    <div className="max-w-md mt-2">
      <TextField
        margin="dense"
        className="w-11/12"
        size="small"
        label="備考欄"
        variant="outlined"
        multiline
        minRows={2}
        maxRows={5}
        value={tl.comment}
        onChange={(e) => changeComment(e.target.value)}
      />
    </div>
  </>
);

export default TLBasicDataInput;
