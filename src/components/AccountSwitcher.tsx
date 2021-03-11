import * as React from 'react';
import { User } from '../models/types';
import Account from './Account';
import createPersistedState from 'use-persisted-state';
import { useHistory } from 'react-router-dom';

const users = require('../data/users.yml') as User[];

const useUserState = createPersistedState('user');

const AccountSwitcher: React.FC = () => {
  const history = useHistory();
  const [_, setUser] = useUserState<User>(null);

  const accounts = users.map(u => (
    <Account
      key={u.userId}
      user={u}
      onClickName={() => {
        setUser(u);
        history.goBack();
      }}
    ></Account>
  ));

  return (
    <div className="AccountSwitcher">
      <div className="wrapper">
        <h1>Who's Watching?</h1>
        <div className="profile-wrap">{accounts}</div>
      </div>
    </div>
  );
};

export default AccountSwitcher;
