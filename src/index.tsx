import { PiletApi } from 'piral-tryout';
import './style.scss';
import ProfileExtension from './components/ProfileExtension';
import ProfilePage from './components/ProfilePage';

export function setup(app: PiletApi) {
  app.registerExtension('header-right', ProfileExtension);
  app.registerPage('/profile', ProfilePage);
}
