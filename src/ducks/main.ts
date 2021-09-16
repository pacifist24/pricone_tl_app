import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from '../app/store';

export type TabType = 'tl' | 'format' | 'name' | 'config' | 'output' | 'favs';

export type MainState = {
  activeTab: TabType;
};

const initialState: MainState = {
  activeTab: 'tl',
};
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeActiveTab: (
      state,
      action: PayloadAction<{
        activeTab: TabType;
      }>,
    ) => {
      state.activeTab = action.payload.activeTab;
    },
  },
});

export const { changeActiveTab } = mainSlice.actions;
export const selectActiveTab = (state: AppState): TabType =>
  state.main.activeTab;
export default mainSlice.reducer;
