import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './UserProfiles.css';

const UserProfiles = () => {

    const [userProfiles, setUserProfiles] = useState([]);

    const [filter, setFilter] = useState('');
  
    const fetchUserProfiles = () => {
      axios.get('http://localhost:8080/api/v1/user-profile').then(res => {
        setUserProfiles(res.data);
      });
    }
    useEffect(() => {
      fetchUserProfiles();
    }, []);

    return (
      <div className="user-profiles-list">
        <div className="search-field-container">
          <input type='text' placeholder='Search by ID' onChange={event => setFilter(event.target.value)} className="search-field"></input>
        </div>
        <div>
          {userProfiles.map((userProfile, index) => {
            if (userProfile.userProfileID !== '' && (userProfile.userProfileID.includes(filter) || filter === '')) {
              return (
                <div key={index} className="listing">
                  <div>
                    <h2>{userProfile.username}</h2>
                    <h3>{userProfile.userProfileID}</h3>
                  </div>
                  <div>
                    <Link to={`/user/${userProfile.userProfileID}`}>
                      <b>View</b>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return '';
            };
          })}
        </div>
      </div>
    );
  }

  export default UserProfiles;