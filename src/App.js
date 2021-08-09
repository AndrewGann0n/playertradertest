import React, { lazy, useState } from 'react'
import usePhotoSearch from './usePhotoSearch'

export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

function handleSearch(e) {
  setQuery(e.target.value)
  setPageNumber(1)
}

  const {
    photos,
    hasMore,
    loading,
    error
  } = usePhotoSearch(query, pageNumber)
  return(
    <>
    <input type = "text" onChange={handleSearch}></input>
    {photos.map(photo => {
      return <div key={photo}>{photo}</div>
    })}
    <div> </div>
    <div> {loading && 'Loading...'} </div>
    <div> {error && 'Error...'} </div>
    </>
  )
}


