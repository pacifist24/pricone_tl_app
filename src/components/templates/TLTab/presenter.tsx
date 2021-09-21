import { VFC } from 'react';
import CharactersInput from 'components/organizms/CharactersInput';
import TLBasicDataInput from 'components/organizms/TLBasicDataInput';
import UBsInput from 'components/organizms/UBsInput';

const TLTab: VFC = () => (
  <div className="pb-5 border-b">
    <div className="mt-5 ml-3">
      <CharactersInput />
    </div>
    <div className="mt-5 ml-3">
      <TLBasicDataInput />
    </div>
    <div className="mt-5 ml-3">
      <UBsInput />
    </div>
  </div>
);

export default TLTab;
