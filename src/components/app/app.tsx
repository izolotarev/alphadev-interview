import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/conts';
import { getSpeakers, getSpeakersLoadingStatus } from '../../store/reducers/speakers/spekers-selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import Main from '../main/main';
import NotFound from '../not-found/not-found';

function App(): JSX.Element {
  const speakers = useSelector(getSpeakers);
  const speakersLoaded = useSelector(getSpeakersLoadingStatus);

  if (!speakersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
      <Routes>
        <Route path={AppRoute.ROOT} element={<Main speakers={speakers}/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
  );
};

export default App;