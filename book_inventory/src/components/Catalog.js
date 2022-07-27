import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axiosBook from "../Config/axiosBook";
import Book from "./Book";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import "./Catalog.css"
import DisplayBook from "./BookDisplay";
import libro1 from './img/Libro1.jpg'

const Catalog = () => {
  //catalog: State
  //setCatalog: Función para actualizar catalogo
  const [catalog, setCatalog] = useState([]);

  const getCatalog = async () => {
    const response = await axiosBook.get("http://localhost:5000/books");
    console.log(response.data);

    setCatalog(response.data);
  };

  useEffect(() => {
    getCatalog();
  }, []);

  const addBook = (book) =>{
    setCatalog((prev) => [...prev,book])
  }

  const delBook = (key) =>{
    setCatalog((prev) => {
      delete prev[key-1]
    })
  }



  const renderCatalog = () => {
    return (
      <tbody>
        {catalog.map((catalog, index) => (
          <Book
            id ={catalog._id}
            key={index}
            index={index}
            title={catalog.title}
            author={catalog.author}
            genre={catalog.genre}
            editorial={catalog.editorial}
            img={libro1}
            del={delBook}
          />
        ))}
      </tbody>
    );
  };
  return (
    <div className="body">
      <Navbar />
      <div className="action-buttons">
        <AddBook agregar={addBook} />
        <EditBook />
      </div>
      <table className="table table-striped">
        <thead>
          <tr className="table-head">
            <th scope="col">Index</th>
            <th scope="col">Imágen</th>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col">Género</th>
            <th scope="col">Editorial</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        {renderCatalog()}
      </table>
    </div>
  );
};

export default Catalog;
