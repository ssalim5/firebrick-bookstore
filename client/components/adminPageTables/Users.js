import React,{useState,useEffect}  from 'react';
import { Table } from "react-bootstrap";
import { useDispatch,useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { addUserThunk,getUserThunk} from '../../store/Users';
const Users = ({currentProducts}) => {
  const dispatch = useDispatch();
  const [addUser,setAddUser] = useState({
    username : '',
    email : '',
    address : '',
    admin : '',
    password : '123' // to avoid notNull validation
  });
  const adminUser = useSelector((state) => state.auth)
  const [addBtnClicked,setAddBtnClicked] = useState(0);

  useEffect(()=>{
    dispatch(getUserThunk())
  },[addBtnClicked,setAddBtnClicked])
  return (
    <>
    <Table striped bordered hover className="me-2 ms-2">
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>#</td>
          <td><input name='username' type="text" value={addUser.username} onChange= {(e) => setAddUser({...addUser, [e.target.name] : e.target.value})}></input></td>
          <td><input name='email' type="text" value={addUser.email} onChange= {(e) => setAddUser({...addUser, [e.target.name] : e.target.value})}></input></td>
          <td><input name='address' type="text" value={addUser.address} onChange= {(e) => setAddUser({...addUser, [e.target.name] : e.target.value})}></input></td>
          <td><p>Admin</p><select id="lang" onChange={(e) => setAddUser({...addUser, admin: e.target.value})} value={addUser.admin}>

                  <option value="true">True</option>
                  <option value="false">False</option>
          </select></td>
          <td><button type="button" className="btn btn-primary" onClick={() => {dispatch(addUserThunk(addUser,adminUser))
          setAddUser({
            username : '',
            email : '',
            address : '',
            admin : '',
            password : '123'
          })
          setAddBtnClicked(addBtnClicked + 1)} } onMouseDown={(e) => {
            e.preventDefault()
             }}>Add</button></td>
        </tr>

    {currentProducts.map((user,index) => {

      return(

      <tr key={index}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td><Link to={{pathname : `/user/${user.id}`,state : {user : user}}}><button type="button" className="btn btn-success">Edit</button></Link></td>
        <td><button type="button" className="btn btn-danger">Delete</button></td>
      </tr>
      )
    })}
    </tbody>
    </Table>
    </>
  )




};

export default Users;
