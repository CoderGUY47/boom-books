import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext'

const Books = () => {

    const {storedBooks} = useContext(BookContext)
    console.log(storedBooks, "bookContext")
  return (
    <div>
        <h1>Books</h1>
    </div>
  )
}

export default Books