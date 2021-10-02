import { VFC, useState } from 'react';
import dynamic from 'next/dynamic';
import { useAppSelector } from 'app/hooks';
import {
  selectIsTLBasicDataInputVisible,
  selectIsUBsInputVisible,
  selectIsCharactersInputVisible,
} from 'ducks/tl';

const TLTabComponent = dynamic(() => import('./presenter'), { ssr: false });

const TLTab: VFC = () => {
  const isTLBasicDataInputVisible = useAppSelector(
    selectIsTLBasicDataInputVisible,
  );
  const isUBsInputVisible = useAppSelector(selectIsUBsInputVisible);
  const isCharactersInputVisible = useAppSelector(
    selectIsCharactersInputVisible,
  );
  const [isCharacterSelectModalOpen, setIsCharacterSelectModalOpen] =
    useState(false);

  return (
    <>
      <TLTabComponent
        isTLBasicDataInputVisible={isTLBasicDataInputVisible}
        isUBsInputVisible={isUBsInputVisible}
        isCharactersInputVisible={isCharactersInputVisible}
        isCharacterSelectModalOpen={isCharacterSelectModalOpen}
        setIsCharacterSelectModalOpen={setIsCharacterSelectModalOpen}
      />
    </>
  );
};

export default TLTab;
