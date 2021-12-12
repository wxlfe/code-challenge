import './AddUserForm.css';

import { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submit = () => {
    axios
      .get(`http://localhost:8080/api/v1/user-profile/${userID}`)
      .then((res) => {
        if (res.data.userProfileID !== '') {
          alert(
            'That user already exists, but you can edit their information.'
          );
        } else {
          if (!userID || !username || !email || !phone) {
            alert('All Values are Required');
          } else {
            axios.post(
              `http://localhost:8080/api/v1/user-profile/${userID}+${username}+${email}+${phone}`
            );
          }
        }
      });
  };

  return (
    <div className='AddUserForm'>
      <h2>Add a New User</h2>
      <form action={`/add`}>
        <div className='form-internal'>
          <h3>User ID: </h3>
          <input
            type='text'
            className='user-id'
            placeholder='User ID'
            onChange={(event) => setUserID(event.target.value)}
          ></input>
          <h3>User Name: </h3>
          <input
            type='text'
            className='name'
            placeholder='Name'
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <h3>User Email: </h3>
          <input
            type='text'
            className='email'
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <h3>User Phone: </h3>
          <input
            type='text'
            className='phone'
            placeholder='Phone'
            onChange={(event) => setPhone(event.target.value)}
          ></input>
        </div>
        <input type='submit' className='submit' onClick={submit}></input>
      </form>
    </div>
  );
};

export default AddUserForm;
