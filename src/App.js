import React from 'react'
import usePhotoSearch from './usePhotoSearch'

export default function App() {
  usePhotoSearch(query, pageNumber)
  return(
    <>
    <input type = "text"></input>
    <div> Photo </div>
    <div> Photo </div>
    <div> Photo </div>
    <div> Photo </div>
    <div> Loading... </div>
    <div> Error </div>
    </>
  )
}


