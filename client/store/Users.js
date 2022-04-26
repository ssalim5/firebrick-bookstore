import axios from 'axios'
import history from '../history'

const GET_USERS = 'GET_USERS';
const UPDATE_USER_BY_ADMIN = 'UPDATE_USER_BY_ADMIN';
const ADD_USER = 'ADD_USER';


const getUsers = users =>({type : GET_USERS,users});
const updateUserByAdmin = user =>({type: UPDATE_USER_BY_ADMIN,user})
const addUser = user => ({type : ADD_USER,user})




export const getUserThunk = () => async dispatch => {
  try{

    const { data: taken } = await axios.get(`/api/users/`);

    return dispatch(getUsers(taken))

  }catch(err){
    console.log(err)
  }
}

export const updateByAdminUserThunk = (user) => async dispatch => {
  try{
    console.log(user)
    const { data: updated } = await axios.put(`/api/users/${user.id}`, user)
    history.push(`/`)
    dispatch(updateUserByAdmin(updated))

  }catch(err){
    console.log(err)
  }
}

export const addUserThunk = (user, userAdmin) => {
  return async (dispatch) => {
    if (userAdmin.admin) {
      try {
        const {data} =  await axios.post("/api/users",user);
        dispatch(addUser(data));
      } catch (err){
        console.log(err);
      }
    } else {
      //Nothing --> Page that denies
    }
  };
};






export default function(state = [], action) {
  switch (action.type) {

    case GET_USERS:
      return action.users;
    case UPDATE_USER_BY_ADMIN:
      return state.map((user)=>{
        if(user.id === action.user.id){
          return action.user
        }
        return user;
      });
    case ADD_USER:
      return [...state,action.user]
    default:
      return state
  }
}
