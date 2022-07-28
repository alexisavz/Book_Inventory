import axios from "axios";
import React from "react";
import "./Book.css";

const deleteBook = (id) => {
  axios.post("http://localhost:5000/books/delete", { id: id })
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    });
};

const Book = ({ id, index, title, author, genre, editorial, img, del}) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>
      <img src={img} className="table-image" alt="" />
    </td>
    <td>{title}</td>
    <td>{author}</td>
    <td>{genre}</td>
    <td>{editorial}</td>
    <td>
      <button onClick={() => deleteBook(id)}>BORRAR</button>{" "}
    </td>
  </tr>
);

export default Book;
