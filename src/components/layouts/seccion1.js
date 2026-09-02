import React from "react";
import '../../styles/components/layouts/Secciones.css';

const Seccion1 = (props) => {

    return(
        <div>
            <div>

                    <h1>TRÁMITES PERSONALES</h1>

                    <hr/>

                <ul className="seccion seccion1">

                    <li className="tarjeta">
                        <div className="contenedorImg">
                            <img src="/imagenes/estudios.png" alt="Estudios" />
                        </div>
                        <a href="https://www.argentina.gob.ar/educacion" target="_blank" rel="noopener noreferrer">Estudios</a>
                    </li>

                    <li className="tarjeta">
                        <div className="contenedorImg">
                            <img src="/imagenes/recibo_de_sueldo.png" alt="Recibo De Sueldos" />
                        </div>
                        <a href="https://www.argentina.gob.ar/recibos-de-sueldo" target="_blank" rel="noopener noreferrer">Recibo De Sueldos</a>
                    </li>

                    <li className="tarjeta">
                        <div className="contenedorImg">
                            <img src="/imagenes/vacunacion.png" alt="Calendario Vacunatorio" />
                        </div>
                        <a href="https://www.argentina.gob.ar/salud/vacunacion" target="_blank" rel="noopener noreferrer">Calendario Vacunatorio</a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Seccion1;