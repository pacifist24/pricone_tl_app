import { VFC } from 'react';
import CharactersInput from 'components/organizms/CharactersInput';
import TLBasicDataInput from 'components/organizms/TLBasicDataInput';
import UBsInput from 'components/organizms/UBsInput';
import CharacterSelectModal from 'components/organizms/CharacterSelectModal';
import SelectCharactersButton from 'components/organizms/SelectCharactersButton';

type Props = {
  isTLBasicDataInputVisible: boolean;
  isUBsInputVisible: boolean;
  isCharactersInputVisible: boolean;
  isCharacterSelectModalOpen: boolean;
  setIsCharacterSelectModalOpen: (val: boolean) => void;
};

const TLTab: VFC<Props> = ({
  isTLBasicDataInputVisible,
  isUBsInputVisible,
  isCharactersInputVisible,
  isCharacterSelectModalOpen,
  setIsCharacterSelectModalOpen,
}) => (
  <div className="pb-5 border-b">
    <div className="mt-3 mb-5 ml-3">
      <SelectCharactersButton
        setIsCharacterSelectModalOpen={setIsCharacterSelectModalOpen}
      />
    </div>
    {isCharactersInputVisible && (
      <div className="ml-3 mt-7">
        <CharactersInput />
      </div>
    )}
    {isTLBasicDataInputVisible && (
      <div className="ml-3 mt-7">
        <TLBasicDataInput />
      </div>
    )}
    {isUBsInputVisible && (
      <div className="mt-5 ml-3">
        <UBsInput />
      </div>
    )}
    <CharacterSelectModal
      isOpen={isCharacterSelectModalOpen}
      setIsOpen={setIsCharacterSelectModalOpen}
    />
  </div>
);

export default TLTab;
