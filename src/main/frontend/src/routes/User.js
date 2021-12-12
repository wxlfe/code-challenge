import { Outlet } from 'react-router';
import Header from '../components/Header';

const User = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default User;
