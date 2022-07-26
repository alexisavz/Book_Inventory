import React, {useState, useEffect} from 'react'
import "./Buscador.css"

const Buscador = () => {
    //Sets
    const [books, setBooks] = useState([])
    const [busqueda, setBusqueda]=useState("")
    //Funcion para traer los datos 
    const URL = ''
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
    }
    showData()
    //FUncion de busqueda
    const buscando =(e) =>{
        setBooks(e.target.value)
        console.log(e.target.value)
    }
    useEffect( () =>{
        showData()
    }, [])

    //Método de filtrado
    let resultado=[]
    if(busqueda){
        resultado=books
    }else{
        books.filter((dato) => dato.title.toLowerCase().include(busqueda.toLocaleLowerCase())
        
        )
    }

  return (
    <div>
        <input value={busqueda} onChange={buscando} type="text" placeholder='Busqueda' className='form-control'/>

        <table className='table table-stripped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>Título</th>
                </tr>
            </thead>
            <tbody>
                {
                    resultado.map((book) =>(
                        <tr key = {book.id}>
                            <td>{book.title}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default Buscador