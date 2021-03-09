import { PiletApi } from 'piral-tryout';
import './style.scss';
import Profile from './Profile';

export function setup(app: PiletApi) {
  app.registerExtension('header-right', Profile);
}
