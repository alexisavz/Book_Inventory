import React from 'react'

const Book =(props) => {    
  return(
  <div>
    <p>{props.index}</p>
    <h1>{props.title}</h1>
    <p>{props.author}</p>
    <p>{props.gender}</p>
    <p>{props.editorial}</p> 
    <imag src={props.img} />
  </div>
  )
}

export default Book