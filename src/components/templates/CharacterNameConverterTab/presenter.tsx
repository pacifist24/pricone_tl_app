import { VFC } from 'react';
import CharacterNameConverterList from 'components/organizms/CharacterNameConverterList';
import CharacterNameConverterInput from 'components/organizms/CharacterNameConverterInput';

const CharacterNameConverterTab: VFC = () => (
  <div className="h-full pb-5 overflow-scroll overflow-x-hidden border-b">
    <CharacterNameConverterInput />
    <CharacterNameConverterList />
  </div>
);

export default CharacterNameConverterTab;
