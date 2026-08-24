import React from "react";

const Servicios = (props) => {
    return (
    // Debe haber un contenedor que contenga el componente, y abra y cierre antes/después de los parentésis.
        <div> 
            <h1>NUESTROS SERVICIOS</h1>
            <p>Brindamos atención médica integral con tecnología de vanguardia</p>

            <div className="tarjetaServicio">
                <img src="assets/servicios/quirofano.jpg" alt="Imagen de quirófano"/>
            </div>
        </div>
    );
}
export default Servicios;