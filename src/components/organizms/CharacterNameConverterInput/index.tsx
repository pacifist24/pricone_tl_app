import { VFC, useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import { addNameConversionRule } from 'ducks/style';
import CharacterNameConverterInputComponent from './presenter';

const CharacterNameConverterInput: VFC = () => {
  const [nameFrom, setNameFrom] = useState('');
  const [nameTo, setNameTo] = useState('');
  const dispatch = useAppDispatch();
  const handleDeleteNameConversionRule = (key: string, value: string) => () =>
    dispatch(addNameConversionRule({ key, value }));

  return (
    <>
      <CharacterNameConverterInputComponent
        nameFrom={nameFrom}
        nameTo={nameTo}
        changeNameFrom={setNameFrom}
        changeNameTo={setNameTo}
        handleClickSubmit={handleDeleteNameConversionRule}
      />
    </>
  );
};
export default CharacterNameConverterInput;
