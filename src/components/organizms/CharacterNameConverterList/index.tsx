import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
  deleteNameConversionRule,
  selectNameConversionTable,
} from 'ducks/style';
import CharacterNameConverterListComponent from './presenter';

const CharacterNameConverterList: VFC = () => {
  const dispatch = useAppDispatch();
  const nameConversionTable = useAppSelector(selectNameConversionTable);
  const handleDeleteNameConversionRule = (key: string) => () =>
    dispatch(deleteNameConversionRule(key));

  return (
    <CharacterNameConverterListComponent
      nameConversionTable={nameConversionTable}
      handleDelete={handleDeleteNameConversionRule}
    />
  );
};

export default CharacterNameConverterList;
