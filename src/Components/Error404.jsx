import React from 'react'
import "../css/Error404.css"
import errorImg from "../Images/error404.png"
export default function Error404() {
  return (
    <div className='error-page'>
        <img src={errorImg} alt="" />
        <h1>Page<br/> Not <br/>Found</h1>
    </div>
  )
}
