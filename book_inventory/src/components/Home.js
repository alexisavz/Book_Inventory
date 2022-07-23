import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import libro1 from './img/Libro1.jpg'
import libro2 from './img/Libro2.jpg'
import libro3 from './img/Libro3.jpg'
import Carousel from 'react-bootstrap/Carousel';

function Home(){
    return(
        <div className="main">
            <Navbar />
            <div className='body_home'>
                <h1 className='titulo_principal'>BOOK INVENTORY</h1>
                <div className="elementos">
                    <Carousel >
                        <Carousel.Item >
                            <img className="d-block w-100" src={libro1} alt="First slide" width="30%"/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="d-block w-100" src={libro2} alt="Second slide" width="30%"/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className="d-block w-100" src={libro3} alt="Third slide" width="30%"/>
                        </Carousel.Item>
                    </Carousel>
                    <div>
                        <p className="cita">"Un libro debe ser como un hacha para el mar helado <br/> que tenemos dentro de nosotros."</p>
                        <p className="cita">Franz Kafka.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home