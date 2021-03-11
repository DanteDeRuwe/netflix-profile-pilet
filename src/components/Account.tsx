import * as React from 'react';
import { AccountProps } from '../models/proptypes';
import avatars from '../data/avatars';
import { Link } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';

const Account: React.FC<AccountProps> = ({ user, onClickName }) => {
  const avatar = user.avatarId ? avatars[user.avatarId] : avatars[0];
  const profilepic = user.imageUrl ? <ProfilePicture imageUrl={user.imageUrl} /> : null;

  return (
    <div className="profile">
      <a href="#" onClick={() => onClickName()}>
        {profilepic || avatar}
      </a>
      <div className="profile-name">
        <a href="#" onClick={() => onClickName()}>
          {user.name}
        </a>
      </div>
    </div>
  );
};

export default Account;
