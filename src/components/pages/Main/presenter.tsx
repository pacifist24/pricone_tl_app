import { VFC } from 'react';
import { isMobile } from 'react-device-detect';
import SplitPane from 'react-split-pane';
import { TabType } from 'ducks/main';
import TabBar from 'components/molecules/TabBar';
import TLTab from 'components/templates/TLTab';
import CharacterNameConverterTab from 'components/templates/CharacterNameConverterTab';
import TLOutputText from 'components/organizms/TLOutputText';
import ConfigTab from 'components/templates/ConfigTab';
import CommonAlert from 'components/atoms/CommonAlert';

type Props = {
  activeTab: TabType;
  changeActiveTab: (tabType: TabType) => void;
};

const Main: VFC<Props> = ({ activeTab, changeActiveTab }) => (
  <>
    {!isMobile && (
      <SplitPane
        split="vertical"
        defaultSize="480px"
        style={{ height: 'calc(100%)' }}
      >
        <main className="flex flex-col h-full border-t border-r border-gray-200">
          <TabBar
            tabs={[
              {
                isActive: activeTab === 'tl',
                onClick: () => changeActiveTab('tl'),
                label: 'TL',
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
          {activeTab === 'name' && <CharacterNameConverterTab />}
          {activeTab === 'config' && <ConfigTab />}
        </main>
        <div>
          <TLOutputText />
        </div>
      </SplitPane>
    )}
    <CommonAlert />
  </>
);

export default Main;
