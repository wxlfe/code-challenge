import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './UserProfile.css';
import PageNotFound from '../PageNotFound';

const UserProfile = ({ params }) => {
  const fetchUserProfile = () => {
    axios
      .get(`http://localhost:8080/api/v1/user-profile/${params.userProfileID}`)
      .then((res) => {
        setUserProfile(res.data);
      });
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const deleteUserProfile = () => {
    axios.delete(
      'http://localhost:8080/api/v1/user-profile/' + userProfile.userProfileID
    );
  };

  const [userProfile, setUserProfile] = useState([]);

  if (userProfile.username === '') {
    return <PageNotFound />;
  } else {
    return (
      <div className='main'>
        <div className='user-info'>
          <h3>User Profile ID: </h3>
          <p>{userProfile.userProfileID}</p>
          <h3>User Name: </h3>
          <p>{userProfile.username}</p>
          <h3>User Email: </h3>
          <p>{userProfile.email}</p>
          <h3>User Phone: </h3>
          <p>{userProfile.phone}</p>
        </div>
        <div className='user-options'>
          <Link to='/'>
            <button onClick={deleteUserProfile}>Delete</button>
          </Link>
          <Link to={`/edit/${userProfile.userProfileID}`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default UserProfile;
