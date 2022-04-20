import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchBooks} from '../store/AllProducts'
import {useEffect} from 'react'
import BooksList from './BooksList'
/**
 * COMPONENT
 */
export const Home = (props) => {

  // In this home page we may have two render page admin vs user , if the user is admin then render different view

  const books = useSelector(state => state.allProducts)
  console.log(books)


  return (

    <div className='d-flex vh-100 m-5'>
      <div className='bg-success w-25' >
        <h3>Filtering div</h3>
      </div>
      <div className='books'>
        {books.map((book) => {
          return(
            <BooksList key = {book.id} book = {book}/>
          )
        })}
      </div>

    </div>
  )
}

export default Home;
