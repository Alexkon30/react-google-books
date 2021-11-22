import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import GlobalContext from './context/GlobalContext'
import Loader from './Loader'


const BookPage = observer(() => {
  const { id } = useParams()
  const { MainStore } = useContext(GlobalContext)

  useEffect(() => {
    MainStore.setLoad(true)
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(data => data.json())
      .then(newdata => {
        console.log(newdata)
        MainStore.setBook(newdata)
        MainStore.setLoad(false)
      })
    // eslint-disable-next-line
  }, [])

  // let imageLinks = MainStore.book.volumeInfo.imageLinks
  // let imageLink = imageLinks.extraLarge ?? imageLinks.large ?? imageLinks.medium ?? imageLinks.small ?? imageLinks.thumbnail ?? imageLinks.smallThumbnail



  return (
    <div className="container">
      {MainStore.isLoad
        ? <Loader />
        : <>
        </>}
      <div className="row">
        <div className="col">
          <img src={MainStore.imgLink} alt="Title page" />
        </div>
        <div className="col">

        </div>
      </div>
    </div>
  )
})

export default BookPage
