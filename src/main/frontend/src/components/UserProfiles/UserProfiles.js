import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './UserProfiles.css';

const UserProfiles = (props) => {

    const [userProfiles, setUserProfiles] = useState([]);
  
    const fetchUserProfiles = () => {
      axios.get('http://localhost:8080/api/v1/user-profile').then(res => {
        setUserProfiles(res.data);
      });
    }
    useEffect(() => {
      fetchUserProfiles();
    }, []);
  
    
    return userProfiles.map((userProfile, index) => {
      if (userProfile.userProfileID !== '' && (userProfile.userProfileID === props.filter || props.filter === '')) {
        return(
          <div key={index} className="listing">
            <div>
              <h2>{userProfile.username}</h2>
              <h3>{userProfile.userProfileID}</h3>
            </div>
            <div>
              <Link to={`/user/${userProfile.userProfileID}`}><b>View</b></Link>
            </div>
          </div>
        )
      } else {
        return '';
      }
    })
  }

  export default UserProfiles;