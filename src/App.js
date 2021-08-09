import React, { Component, lazy, Suspense, useState } from 'react'
import usePhotoSearch from './usePhotoSearch'
import MyComp from './components/MyComp';
const MyComp = lazy(() => (import('./components/myComp')))


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
    <Suspense fallback={<div>Loading.....</div>}>

    
    <MyComp></MyComp>
    <input type = "text" onChange={handleSearch}></input>
    {photos.map(photo => {
      return <div key={photo}>{photo}</div>
    })}
    <div> </div>
    <div> {loading && 'Loading...'} </div>
    <div> {error && 'Error...'} </div>
    </Suspense>
    </>
  )
}


