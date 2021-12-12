import './Header.css';

import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <div>
        <Link to='/' className='header-home'>
          <h1>Lifeway Code Challenge</h1>
        </Link>
      </div>
      <div>
        <div className='header-search-form'>
          <Link to='/add'>
            <h2>Add a New User</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
