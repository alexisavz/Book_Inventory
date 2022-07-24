import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import axiosBook from "../Config/axiosBook";
import Book from "./Book";


const Catalog = () => {

  <Navbar/>
    //catalog: State
    //setCatalog: Función para actualizar catalogo
    const [catalog, setCatalog] = useState([]);

    const getCatalog = async () => {
        const response = await axiosBook.get('/addbooks');
        console.log(response.data);

        setCatalog(response.data);
    };

    useEffect(() => {
        getCatalog();
    },[]);

    const renderCatalog = () =>{
      return (
        <tbody>
          {
            catalog.map((catalog, index) =>(
              <Book
                key={index}
                index={index}
                title={Book.tilte}
                author={Book.author}
                gender={Book.gender}
                editorial={Book.editorial}
                image={Book.img}
              />
            ))
          }
        </tbody>
      );
    };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Título</th>
          <th scope="col">Autor</th>
          <th scope="col">Género</th>
          <th scope="col">Editorial</th>
          <th scope="col">Imágen</th>
        </tr>
      </thead>
      {renderCatalog()}
    </table>
  );  
};

export default Catalog;
