import { VFC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectArrangement, changeArrangement, ArrangeType } from 'ducks/style';
import ConfigArrangementInputComponent from './presenter';

const ConfigArrangementInput: VFC = () => {
  const dispatch = useAppDispatch();
  const handleChangeArrangement = (arrange: ArrangeType) => {
    dispatch(changeArrangement(arrange));
  };
  const arrangement = useAppSelector(selectArrangement);

  return (
    <>
      <ConfigArrangementInputComponent
        arrangement={arrangement}
        changeArrangement={handleChangeArrangement}
      />
    </>
  );
};
export default ConfigArrangementInput;
