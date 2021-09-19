import { VFC } from 'react';
import CharactersInput from '../../container/organizms/CharactersInput';
import TLBasicDataInput from '../../container/molecules/TLBasicDataInput';
import UBsInput from '../../container/organizms/UBsInput';

const TLTab: VFC = () => (
  <div className="border-b">
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
