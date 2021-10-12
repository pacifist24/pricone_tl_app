import { VFC } from 'react';
import SelectCharactersButtonComponent from './presenter';

type Props = {
  setIsCharacterSelectModalOpen: (val: boolean) => void;
};

const SelectCharactersButton: VFC<Props> = ({
  setIsCharacterSelectModalOpen,
}) => (
  <>
    <SelectCharactersButtonComponent
      setIsCharacterSelectModalOpen={setIsCharacterSelectModalOpen}
    />
  </>
);

export default SelectCharactersButton;
