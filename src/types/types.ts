import { RootState } from '../store/reducers/root-reducer';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export type SpeakersState = {
  speakers: SpeakerType[];
  speakersLoaded: boolean;
}

export type SpeakerType = {
  description: string,
  gender: string,
  name: string,
  perfomanceTime: string,
  photoUrl: string,
  ['perfomance_time']?: string,
  ['photo_url']?: string,
}

export type State = RootState;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;