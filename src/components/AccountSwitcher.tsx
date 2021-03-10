import * as React from 'react';
import DummyProfile from './DummyProfile';

const AccountSwitcher: React.FC = () => (
  <div className="AccountSwitcher">
    <div className="wrapper">
      <h1>Who's Watching?</h1>
      <div className="profile-wrap">
        <DummyProfile number={1} name="John"></DummyProfile>
        <DummyProfile number={2} name="Jenny"></DummyProfile>
        <DummyProfile number={3} name="Jack"></DummyProfile>
        <DummyProfile number={4} name="Jane"></DummyProfile>
      </div>
    </div>
  </div>
);

export default AccountSwitcher;
