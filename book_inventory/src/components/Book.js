import axios from "axios";
import React from "react";
import "./Book.css";

const deleteBook = (id,key) => {
  axios.post("http://localhost:5000/books/delete", { id: id })
    .then((res) => {
      alert("book deleted")
      props.del(key)
    })
    .catch((err) => {
      console.log(err);
    });
};

const Book = (props, { id, index, title, author, genre, editorial, img }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>
      {" "}
      <img src={img} className="table-image" alt="" />
    </td>
    <td>{title}</td>
    <td>{author}</td>
    <td>{genre}</td>
    <td>{editorial}</td>
    <td>
      {" "}
      <button onClick={() => deleteBook(id, index)}>BORRAR</button>{" "}
    </td>
  </tr>
);

export default Book;
