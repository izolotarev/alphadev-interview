import { SpeakersState } from '../../../types/types';
import { createReducer } from '@reduxjs/toolkit';
import { loadSpeakersAction } from '../../actions/actions';
import { adaptSpeakerToClient } from '../../../utils/utils';

export const initialState: SpeakersState = {
  speakers: [],
  speakersLoaded: false,
};

export const speakersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSpeakersAction, (state, action) => {
      state.speakers = action.payload.speakers.map((item) => adaptSpeakerToClient(item));
      state.speakersLoaded = true;
    })
});
