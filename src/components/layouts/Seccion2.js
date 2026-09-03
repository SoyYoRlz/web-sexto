import React from "react";
import '../../styles/components/layouts/Secciones.css';

const Seccion2 = (props) => {

    return(
        <div>
            <div>
                <h1 >INFORMACIÓN PÚBLICA</h1>

                <hr/>

                <ul className="seccion seccion2">
                    <li className="tarjeta">
                        <div className="contenedorImg">
                            <img src="/imagenes/s_e_f.png" alt="Situación Económica Financiera" />
                        </div>
                        <a href="https://www.argentina.gob.ar/situacion-economica-financiera" target="_blank" rel="noopener noreferrer">Situación Económica Financiera</a>
                    </li>

                    <li className="tarjeta">
                        <div className="contenedorImg">
                            <img src="/imagenes/ing_info_proveedores.png" alt="Portal De Proveedores" />
                        </div>
                        <a href="https://www.argentina.gob.ar/portal-de-proveedores" target="_blank" rel="noopener noreferrer">Portal De Proveedores</a>
                    </li>

                    <li className="tarjeta">
                        <div className="contenedorImg">
                            <img src="/imagenes/Resoluciones.png" alt="Registro De Resoluciones" />
                        </div>
                        <a href="https://www.argentina.gob.ar/registro-de-resoluciones" target="_blank" rel="noopener noreferrer">Registro De Resoluciones</a>
                    </li>
                </ul>

                <ul className="seccion seccion2">
                    <li className="tarjeta">
                        <div className="contenedorImg">
                            <img src="/imagenes/declaracion_jurada.png" alt="Declaraciones Juradas" />
                        </div>
                        <a href="https://www.argentina.gob.ar/declaraciones-juradas" target="_blank" rel="noopener noreferrer">Declaraciones Juradas</a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Seccion2;
