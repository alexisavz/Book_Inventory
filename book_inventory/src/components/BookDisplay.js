import React from "react";
import "./BookDisplay.css";

const DisplayBook = () => {
  return (
    <div className="wrap"> 
        <tr className="book-row">
            <th scope="col"><img src={require("./img/Libro1.jpg")} className="image" alt="" /></th>
            <th scope="col"><p className="title">Harry Potter y el misterio del principe</p></th>
            <th scope="col"><p className="author">J.K. Rowling</p></th>
            <th scope="col"><p className="genre">Fantasia</p></th>
            <th scope="col"><p className="editorial">Penguin</p></th>
            <th scope="col"><button>Delete</button></th>
          </tr>
    </div>
  );
};

export default DisplayBook;
