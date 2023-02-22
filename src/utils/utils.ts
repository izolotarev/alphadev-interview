import { SpeakerType } from '../types/types'

export const adaptSpeakerToClient = (data: SpeakerType): SpeakerType => {
  const adaptedItem = Object.assign(
    {},
    data,
    {
      perfomanceTime: data['perfomance_time'],
      photoUrl: data['photo_url'],
    },
  );
  delete adaptedItem['perfomance_time'];
  delete adaptedItem['photo_url'];
  return adaptedItem;
};