import { useParams } from 'react-router';
import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
  let params = useParams();

  return <UserProfile params={params} />;
};

export default UserProfilePage;
