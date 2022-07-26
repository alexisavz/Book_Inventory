import React from 'react'

const Book =({index, title, author, gender, editorial, img} ) => (
    <tr>
    <th scope="row">{index+1}</th>
    <td>{title}</td>
    <td>{author}</td>
    <td>{gender}</td>
    <td>{editorial}</td>
    <td>{img}</td>
  </tr>
);
export default Book;
