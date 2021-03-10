import * as React from 'react';
import { User } from '../models/types';
import Account from './Account';
import usersdata from '../data/users.yml';
import createPersistedState from 'use-persisted-state';

const users = usersdata as User[];

const useUserState = createPersistedState('user');

const AccountSwitcher: React.FC = () => {
  const [user, setUser] = useUserState<User>(null);

  const profiles = users.map(user => (
    <Account key={user.userId} user={user} onClickName={() => setUser(user)}></Account>
  ));

  return (
    <div className="AccountSwitcher">
      <div className="wrapper">
        <h1>Who's Watching?</h1>
        <div className="profile-wrap">{profiles}</div>
      </div>
    </div>
  );
};

export default AccountSwitcher;
