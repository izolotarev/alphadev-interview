import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute } from '../../const/conts';
import { SpeakerType, ThunkActionResult } from '../../types/types';
import { loadSpeakersAction } from './actions';


export const fetchSpeakers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(APIRoute.SPEAKERS);
      const speakersData: SpeakerType[] = data.response;

      dispatch(loadSpeakersAction(speakersData));
    } catch (error) {
      handleError(error);
    }
  };

const handleError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    const error = err as AxiosError;
    toast.info(error.response?.data.error);
  }
};