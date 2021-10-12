import { FC } from 'react';
import ChipComponent from './presenter';

type Props = {
  onDelete: () => void;
};
const Chip: FC<Props> = ({ onDelete, children }) => (
  <>
    <ChipComponent onDelete={onDelete}>{children}</ChipComponent>
  </>
);
export default Chip;
