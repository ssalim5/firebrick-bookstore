import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {logout} from '../store'
import SearchIcon from '../assets/SearchIcon.svg'
import CartIcon from '../assets/CartIcon.svg';
const Navbar = ({handleClick, isLoggedIn}) => (
  <div className = 'd-flex flex-wrap align-items-center bg-info'>
    <div className='ms-4 me-auto p-2' >
    <Link to="/"><h1 className='navHeader'>FireBrick Book Store</h1></Link>

    </div>
    <nav>
      {isLoggedIn ? (
        <div className=''>
          {/* The navbar will show these links after you log in */}
          <formal >
              <label htmlFor="search">
              </label>
              <input className = 'me-2'name="search" type="text" placeholder='type for search' />
              <SearchIcon width ={25} height= {25} style = {{cursor : 'pointer'}}/>

          </formal>
          <Link to="/userProfile">Profile</Link>
          <CartIcon width ={25} height= {25} style = {{cursor : 'pointer'}}/>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className='me-4'>
          <formal >
              <label htmlFor="search">
              </label>
              <input className = 'me-2'name="search" type="text" placeholder='type for search' />
              <SearchIcon width ={25} height= {25}/>
          </formal>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)



