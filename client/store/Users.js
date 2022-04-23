import axios from 'axios'


const GET_USERS = 'GET_USERS';

const getUsers = users =>({type : GET_USERS,users});


export const getUserThunk = () => async dispatch => {
  try{

    const { data: taken } = await axios.get(`/api/users/`);

    return dispatch(getUsers(taken))

  }catch(err){
    console.log(err)
  }
}


export default function(state = [], action) {
  switch (action.type) {

    case GET_USERS:
      return action.users
    default:
      return state
  }
}
