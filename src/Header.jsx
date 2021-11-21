import './style.css'
import React, { useContext, useRef } from 'react'
import GlobalContext from './context/GlobalContext'
import { observer } from 'mobx-react-lite'


const Header = observer(() => {
  const { MainStore } = useContext(GlobalContext)
  const searchRef = useRef()

  const handleSearch = () => {
    // console.log(searchRef.current.value)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchRef.current.value}`)
      .then(data => data.json())
      .then(newdata => MainStore.setBooks(newdata))
  }


  return (
    <header className='container pt-3 pb-3 mt-3'>
      <h1 className='text-center text-white fw-bold'>Search for books</h1>

      <div className="row justify-content-center">
        <div className="col-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Book title" ref={searchRef} />
            <button
              className="btn btn-success"
              type="button"
              id="button-addon2"
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-2">
          <select className="form-select" defaultValue={1}>
            <option value="0" disabled>Categories</option>
            <option value="1">All</option>
            <option value="2">Art</option>
            <option value="3">Biography</option>
            <option value="4">Computers</option>
            <option value="5">History</option>
            <option value="6">Medical</option>
            <option value="7">Poetry</option>


          </select>
        </div>
        <div className="col-2">
          <select className="form-select" defaultValue={1}>
            <option value="1">Relevance</option>
            <option value="2">Newest</option>
          </select>
        </div>
      </div>

    </header>
  )
})

export default Header
