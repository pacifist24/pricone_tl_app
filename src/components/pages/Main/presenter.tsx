import { VFC } from 'react';
import { TabType } from 'ducks/main';
import TabBar from 'components/molecules/TabBar';
import TLTab from 'components/templates/TLTab';

type Props = {
  activeTab: TabType;
  changeActiveTab: (tabType: TabType) => void;
};

const Main: VFC<Props> = ({ activeTab, changeActiveTab }) => (
  <>
    <TabBar
      tabs={[
        {
          isActive: activeTab === 'tl',
          onClick: () => changeActiveTab('tl'),
          label: 'TL',
        },
        {
          isActive: activeTab === 'output',
          onClick: () => changeActiveTab('output'),
          label: 'Output',
        },
        {
          isActive: activeTab === 'name',
          onClick: () => changeActiveTab('name'),
          label: 'Name',
        },
        {
          isActive: activeTab === 'config',
          onClick: () => changeActiveTab('config'),
          label: 'Config',
        },
        {
          isActive: activeTab === 'favs',
          onClick: () => changeActiveTab('favs'),
          label: 'Favs',
        },
      ]}
    />
    {activeTab === 'tl' && <TLTab />}
  </>
);

export default Main;
