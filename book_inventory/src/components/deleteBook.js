import React from "react";
import axios from "axios";

const deleteBook = (props, {id,key}) => {
    axios.post("http://localhost:5000/books/delete", { id: id })
      .then((res) => {
        alert("book deleted")
        props.del(key)
      })
      .catch((err) => {
        console.log(err);
      }); 
  };


export default deleteBook;