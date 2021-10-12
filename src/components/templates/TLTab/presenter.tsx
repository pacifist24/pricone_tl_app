import { VFC } from 'react';
import CharactersInput from 'components/organizms/CharactersInput';
import TLBasicDataInput from 'components/organizms/TLBasicDataInput';
import UBsInput from 'components/organizms/UBsInput';
import CharacterSelectModal from 'components/organizms/CharacterSelectModal';
import SelectCharactersButton from 'components/organizms/SelectCharactersButton';
import ReadTLFromClipBoardButton from 'components/organizms/ReadTLFromClipboardButton';
import PostTLButton from 'components/organizms/PostTLButton';

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
  <div className="h-full pb-5 overflow-scroll overflow-x-hidden border-b">
    <div className="flex mt-3 mb-5 ml-3">
      <div className="mr-3">
        <SelectCharactersButton
          setIsCharacterSelectModalOpen={setIsCharacterSelectModalOpen}
        />
      </div>
      <div>
        <ReadTLFromClipBoardButton />
      </div>
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
      <>
        <div className="mt-5 ml-3">
          <UBsInput />
        </div>
        <div className="mt-5 mb-5">
          <PostTLButton />
        </div>
      </>
    )}
    <CharacterSelectModal
      isOpen={isCharacterSelectModalOpen}
      setIsOpen={setIsCharacterSelectModalOpen}
    />
  </div>
);

export default TLTab;
