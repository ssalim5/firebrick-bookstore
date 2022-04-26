import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import { updateBookThunk} from '../../store/SingleProduct';

import { useLocation} from 'react-router-dom'
import { fetchBooks } from '../../store/AllProducts';
const EditBook = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const { book } = location.state || '';
  const bookFromStore = useSelector((state)=> state.singleProduct)
  console.log(bookFromStore)
  const [singleBook,setSingleBook] = useState(book || {author : '',
    title : '',
    price : '',
  stock : ''})

  useEffect(() =>{
    dispatch(fetchBooks())
  },[bookFromStore])


  return(
    <div className='container'>
      <form >
        <div>
          <label htmlFor="author">
            <small>Author</small>
          </label>
          <input name="author" type="text" value={singleBook.author || ''} onChange={(e) => setSingleBook({...singleBook, [e.target.name]: e.target.value})}/>
        </div>
        <div>
          <label htmlFor="title">
            <small>Title</small>
          </label>
          <input name="title" type="title" value={singleBook.title} onChange={(e) => setSingleBook({...singleBook, [e.target.name]: e.target.value})} />
        </div>

        <div>
          <label htmlFor="price">
            <small>Price</small>
          </label>
          <input name="price" type="price" value={singleBook.price} onChange={(e) => setSingleBook({...singleBook, [e.target.name]: e.target.value})}/>
        </div>

        <div>
          <label htmlFor="stock">
            <small>Stock</small>
          </label>
          <input name="stock" type="stock" value={singleBook.stock} onChange={(e) => setSingleBook({...singleBook, [e.target.name]: e.target.value})}/>
        </div>

        <div>
          <button className='btn btn-primary' onClick={(e) => {
            e.preventDefault()
        console.log(singleBook)
        dispatch(updateBookThunk(singleBook))

        }}>Submit</button>
        </div>
      </form>
    </div>
  )


}



export default EditBook;
