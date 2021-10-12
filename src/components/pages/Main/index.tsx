import { VFC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { changeActiveTab, selectActiveTab, TabType } from 'ducks/main';
import { initNameConversionRule } from 'ducks/style';
import { CHARACTERS_INFO } from 'lib/gameConstants';
import MainComponent from './presenter';

const Main: VFC = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(selectActiveTab);

  // マウント時に各種設定を初期化する
  useEffect(() => {
    // ローカルストレージにStyleの設定があれば設定する
    if (localStorage.getItem(`name${process.env.version}`)) {
      dispatch(
        initNameConversionRule(
          JSON.parse(localStorage.getItem(`name${process.env.version}`)) as {
            [key: string]: string;
          },
        ),
      );
    } else {
      const nameConversionTable = {};
      Object.keys(CHARACTERS_INFO).forEach((name) => {
        if (CHARACTERS_INFO[name].defaultShortName) {
          nameConversionTable[name] = CHARACTERS_INFO[name].defaultShortName;
        }
      });
      dispatch(initNameConversionRule(nameConversionTable));
    }
  }, [dispatch]);

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
