import './EditUserForm.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserForm = ({ params }) => {
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const fetchUserProfile = () => {
    axios
      .get(`http://localhost:8080/api/v1/user-profile/${params.userProfileID}`)
      .then((res) => {
        setUserID(res.data.userProfileID);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      });
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const submit = () => {
    axios
      .get(`http://localhost:8080/api/v1/user-profile/${userID}`)
      .then((res) => {
        if (res.data.userProfileID === '') {
          alert("That user doesn't exist, try adding them.");
        } else {
          if (!userID || !username || !email || !phone) {
            alert('All Values are Required');
          } else {
            axios.post(
              `http://localhost:8080/api/v1/user-profile/edit/${userID}+${username}+${email}+${phone}`
            );
          }
        }
      });
  };

  return (
    <div className='EditUserForm'>
      <h2>Edit a User</h2>
      <form action={`/`}>
        <div className='form-internal'>
          <h3>User ID:</h3>
          <input
            type='text'
            className='user-id'
            placeholder='User ID'
            value={userID}
            onChange={(event) => setUserID(event.target.value)}
          ></input>
          <h3>User Name: </h3>
          <input
            type='text'
            className='name'
            placeholder='Name'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <h3>User Email: </h3>
          <input
            type='text'
            className='email'
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <h3>User Phone: </h3>
          <input
            type='text'
            className='phone'
            placeholder='Phone'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          ></input>
        </div>
        <input type='submit' className='submit' onClick={submit}></input>
      </form>
    </div>
  );
};

export default EditUserForm;
