import React, { useState } from 'react';
import "./AddBook.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//insalar:  npm i react-bootstrap bootstrap


function AddBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button  onClick={handleShow}>
        Añadir
      </button>

      <Modal contentClassName='mainModel' show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Header closeButton>
          <div className="titulo" textAlign={"center"}> Agrega un libro</div>
        </Modal.Header>
        
        <form >
            <div className='form'>
            <div>
                <label className="titulos_formulario" for="titulo">Título:</label>
                <input  type="text" className="form-control" id="titulo"  placeholder="Ingresa título del libro" />
            </div>
            <div>
                <label className="titulos_formulario" for="autor">Autor:</label>
                <input type="text" className="form-control" id="autor" placeholder="Ingresa nombre del autor" />
            </div> 
            <div>
                <label className="titulos_formulario" for="genero">Género:</label>
                <select id="genero" name="genero">
                    <option value="ciencia">Ciencia Ficción</option>
                    <option value="novela">Novela</option>
                    <option value="cuento">Cuentos Infantiles</option>
                    <option value="thriller">Thriller</option>
                    <option value="misterio">Misterio</option>
                    <option value="aventuras">Aventuras</option>
                </select>
            </div> 
            <div>
                <label className="titulos_formulario" for="ind">ID:</label>
                <input type="text" className="form-control" id="ind" placeholder="Ingresa id del libro" />
            </div> 
            <div>
                <label className="titulos_formulario" for="editorial">Editorial:</label>
                <input type="text" className="form-control" id="editorial" placeholder="Ingresa la editorial del libro" />
            </div>
                <label className="titulos_formulario" for="myfile">Seleccionar Imagen:</label>
                <input type="file" id="myfile" className="form-control" name="myfile" /><br/>
            </div>
        </form>
        <div className='footer'>
          <Button variant="secondary"  onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Añadir Libro
          </Button>
        </div>
      </Modal>
      </div>
  );
}

export default AddBook