import './HomeHeader.css';

import { Link } from 'react-router-dom';

const HomeHeader = (props) => {
    return (
        <header>
        <div>
          <Link to="/" className="header-home">
            <h1>Lifeway Code Challenge</h1>
          </Link>
        </div>
        <div>
          <div className="header-search-form">
            <input type='text' placeholder='Search by ID' onChange={event => props.setFilter(event.target.value)}></input>
            <Link to="/add"><h2>Add a New User</h2></Link>
          </div>
        </div>
      </header>
    )
}

export default HomeHeader;