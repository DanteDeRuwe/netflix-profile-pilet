import * as React from 'react';
import { ProfileProps } from '../models/proptypes';
import avatars from '../data/avatars';
import { Link } from 'react-router-dom';

const ProfilePicture: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
  <div
    className="profile-icon"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
    }}
  ></div>
);

const Account: React.FC<ProfileProps> = ({ user, onClickName }) => {
  const avatar = user.avatarId ? avatars[user.avatarId] : avatars[0];
  const profilepic = user.imageUrl ? <ProfilePicture imageUrl={user.imageUrl} /> : avatar;

  return (
    <div className="profile">
      <Link to="/" onClick={() => onClickName()}>
        {profilepic}
      </Link>
      <div className="profile-name">
        <Link to="/" onClick={() => onClickName()}>
          {user.name}
        </Link>
      </div>
    </div>
  );
};

export default Account;
