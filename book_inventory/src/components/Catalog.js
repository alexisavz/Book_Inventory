import React,{useState} from "react";
import NavBar from "./Navbar";
import Book from "./Book";
function Catalog(){

  const renderCatalogos =(Book) => {
    return (
      <tbody>{
       Catalog.map((Catolog, index) =>( 
       <tr>
       <th scope="row">{index+1}</th>
       <td>{Catalog.Title}</td>
       <td>{Catalog.Author}</td>
       <td>{Catalog.Gender}</td>
       <td>{Catalog.Editorial}</td>
       <td>{Catalog.Image}</td>
     </tr>
     )) 
      }</tbody>
    )
  }
    return(
        <table className="table">
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
  {renderCatalogos}
</table>
    )
}

export default Catalog
