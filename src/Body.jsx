import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import GlobalContext from './context/GlobalContext'



const Body = observer(() => {
  const { MainStore } = useContext(GlobalContext)

  const test = () => {
    console.log(MainStore.books.items)
  }


  return (
    <div>
      <button onClick={test}>Click</button>
    </div>
  )
})

export default Body
