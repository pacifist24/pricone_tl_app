import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTL } from '../../ducks/tl';
import TLTabComponent from '../../components/organizms/TLTab';

const TLTab: VFC = () => {
  const dispatch = useAppDispatch();
  const tl = useAppSelector(selectTL);

  return (
    <>
      <TLTabComponent tl={tl} />
    </>
  );
};

export default TLTab;
