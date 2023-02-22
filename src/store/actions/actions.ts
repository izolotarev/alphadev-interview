import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../const/conts';
import { SpeakerType } from '../../types/types';

export const loadSpeakersAction = createAction(
  ActionType.LoadSpeakers,
  (speakers: SpeakerType[]) => ({
    payload: {
      speakers
    }
  })
);