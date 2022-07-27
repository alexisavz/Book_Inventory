import React, { useState } from "react";
import "./AddBook.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//insalar:  npm i react-bootstrap bootstrap
const axios = require("axios").default;

function AddBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function postBook() {
    //Get Book data
    let bookName = document.getElementById("titulo").value;
    let bookAuthor = document.getElementById("autor").value;
    let bookGenre =
      document.getElementById("genero").options[
        document.getElementById("genero").selectedIndex
      ].value;
    let bookEditorial = document.getElementById("editorial").value;

    //Make Axios Post to make a post petition to the API
    await axios.post("http://localhost:5000/books", {
        title: bookName,
        author: bookAuthor,
        editorial: bookEditorial,
        genre: bookGenre
      })
      .then(function (response) {     //If petition succedes, proceed
      })
      .catch(function (error) {       //If petition fails, alert error
        alert(error);
      });

    //Close modal
    handleClose();
  }

  return (
    <div>
      <button className="add-button" onClick={handleShow}>
        Añadir
      </button>

      <Modal
        contentClassName="mainModel"
        show={show}
        onHide={handleClose}
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton>
          <div className="titulo" textAlign={"center"}>
            {" "}
            Agrega un libro
          </div>
        </Modal.Header>

        <form>
          <div className="form">
            <div>
              <label className="titulos_formulario" for="titulo">
                Título:
              </label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Ingresa título del libro"
              />
            </div>
            <div>
              <label className="titulos_formulario" for="autor">
                Autor:
              </label>
              <input
                type="text"
                className="form-control"
                id="autor"
                placeholder="Ingresa nombre del autor"
              />
            </div>
            <div>
              <label className="titulos_formulario" for="genero">
                Género:
              </label>
              <select id="genero" name="genero">
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Novela">Novela</option>
                <option value="Cuentos Infantiles">Cuentos Infantiles</option>
                <option value="Thriller">Thriller</option>
                <option value="Misterio">Misterio</option>
                <option value="Aventuras">Aventuras</option>
                <option value="No-Ficción">No-Ficción</option>
              </select>
            </div>
            <div>
              <label className="titulos_formulario" for="editorial">
                Editorial:
              </label>
              <input
                type="text"
                className="form-control"
                id="editorial"
                placeholder="Ingresa la editorial del libro"
              />
            </div>
            <div>
              <label className="titulos_formulario" for="imagen">
                Imagen:
              </label>
              <input
                type="text"
                className="form-control"
                id="imagen"
                placeholder="Ingresa url de la imagen"
              />
            </div>
          </div>
        </form>
        <div className="footer">
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={postBook}>
            Añadir Libro
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default AddBook;
