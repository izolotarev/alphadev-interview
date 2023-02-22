import { combineReducers } from '@reduxjs/toolkit';
import { speakersData } from './speakers/speakers-reducer';

export enum NameSpace {
  speakers = 'SPEAKERS',
}

export const rootReducer = combineReducers({
  [NameSpace.speakers]: speakersData,
});

export type RootState = ReturnType<typeof rootReducer>;