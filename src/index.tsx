import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import ProfileExtension from './components/ProfileExtension';
import './scss/style.scss';

export function setup(app: PiletApi) {
  app.registerExtension('header-items', ProfileExtension);

  const ProfilePage = React.lazy(() => import('./components/ProfilePage'));
  app.registerPage('/profile', ProfilePage);
}
