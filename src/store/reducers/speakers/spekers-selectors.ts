import { SpeakerType, State } from '../../../types/types';
import { NameSpace } from '../root-reducer';

export const getSpeakers = (state: State): SpeakerType[] => state[NameSpace.speakers].speakers;
export const getSpeakersLoadingStatus = (state: State): boolean => state[NameSpace.speakers].speakersLoaded;