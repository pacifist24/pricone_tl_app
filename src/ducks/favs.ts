import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../app/store';
import { Character } from './tl';

export type Fav = {
  phase: number;
  bossName: string;
  damage: number;
  duration: number;
  characters: Character[];
};

export type FavsState = {
  favs: { [key: string]: Fav };
};

const initialState: FavsState = {
  favs: {},
};

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // changeHeaderFormat: (state, action: PayloadAction<string>) => {
    //   state.headerFormat = action.payload;
    // },
  },
});

// export const { changeHeaderFormat } = styleSlice.actions;

export const selectFavs = (state: AppState): { [key: string]: Fav } =>
  state.favs.favs;

export default favsSlice.reducer;
