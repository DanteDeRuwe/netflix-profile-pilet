import { PiletApi } from 'piral-tryout';
import './scss/style.scss';
import ProfileExtension from './components/ProfileExtension';
import ProfilePage from './components/ProfilePage';

export function setup(app: PiletApi) {
  app.registerExtension('header-right', ProfileExtension);
  app.registerPage('/profile', ProfilePage);
}
