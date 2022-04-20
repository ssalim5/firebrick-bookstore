import React from "react";
import {useDispatch,useSelector} from 'react-redux'
export const UserProfile = (props) => {
  // const {userId,.......} = props ----- user info probably passed with props.
  const books = useSelector(state => state.Allproducts);
  console.log(books)
  return (
    <div>
      <h1>userProfile page </h1>
    </div>
  );
};

export default UserProfile;
