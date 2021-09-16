import { VFC } from 'react';
import { TLState } from '../../ducks/tl';
import CharacterPanel from '../../container/organizms/CharactersInput';

type Props = {
  tl: TLState;
};

const TLTab: VFC<Props> = ({ tl }) => (
  <div className="flex pl-5 pr-4 border-b space-x-5">
    {/* {tl.bossName} */}
    <CharacterPanel />
  </div>
);

export default TLTab;
