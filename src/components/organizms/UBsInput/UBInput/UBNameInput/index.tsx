import { VFC } from 'react';
import UBNameInputComponent from './presenter';

type Props = {
  name?: string;
  changeUBName?: () => void;
};

const UBNameInput: VFC<Props> = ({
  name = '',
  changeUBName = () => undefined,
}) => (
  <>
    <UBNameInputComponent name={name} changeUBName={changeUBName} />
  </>
);

export default UBNameInput;
