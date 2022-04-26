import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import { useLocation} from 'react-router-dom'
import { getUserThunk, updateByAdminUserThunk } from '../../store/Users';

const EditUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = location.state || '';


  const [singleUser,setSingleUser] = useState(user || {username : '',
    email : '',
    address : '',
  admin : ''})



  return (
    <div className='container'>
      <form >
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" value={singleUser.username || ''} onChange={(e) => setSingleUser({...singleUser, [e.target.name]: e.target.value})}/>
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="email" value={singleUser.email} onChange={(e) => setSingleUser({...singleUser, [e.target.name]: e.target.value})} />
        </div>

        <div>
          <label htmlFor="address">
            <small>Address</small>
          </label>
          <input name="address" type="address" value={singleUser.address} onChange={(e) => setSingleUser({...singleUser, [e.target.name]: e.target.value})}/>
        </div>

        <div>
        <p>Admin</p>
        <select id="lang" onChange={(e) => setSingleUser({...singleUser, admin: e.target.value})} value={singleUser.admin}>

        <option value="true">True</option>
        <option value="false">False</option>
        </select>
        </div>

        <div>
          <button className='btn btn-primary' onClick={(e) => {
            e.preventDefault()

        dispatch(updateByAdminUserThunk(singleUser))

        }}>Submit</button>
        </div>
      </form>
    </div>
  )


};

export default EditUser;
