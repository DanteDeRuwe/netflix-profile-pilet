import * as React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => (
  <Link to="/profile">
    <div className="UserProfile">
      <div className="User">
        <div className="name">Jane Doe</div>
        <div className="image">
          <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
        </div>
      </div>
    </div>
  </Link>
);
export default Profile;
