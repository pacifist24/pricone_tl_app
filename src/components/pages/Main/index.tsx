import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { changeActiveTab, selectActiveTab, TabType } from 'ducks/main';
import MainComponent from './presenter';

const Main: VFC = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(selectActiveTab);

  return (
    <>
      <MainComponent
        activeTab={activeTab}
        changeActiveTab={(tabType: TabType) =>
          dispatch(changeActiveTab({ activeTab: tabType }))
        }
      />
    </>
  );
};

export default Main;
