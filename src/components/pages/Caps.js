import React from "react";
import "../../styles/components/layout/"
import "./Caps.css";

const Caps = (props) => {
    return (
        <div className="paginaCaps">
            <main className="contenido">

                <div className="titulo">
                    <h1>CENTROS DE ATENCIÓN PRIMARIA DE LA SALUD (CAPS)</h1>
                    <p>Red de atención primaria distribuida en todo el distrito de Benito Juárez</p>
                </div>

                <div className="tarjetas">

                    <div className="tarjeta">

                        <div className="tituloTarjeta">
                            <img className="icono" src="" alt="" />
                            <h2>OSVALDO CATENA</h2>
                        </div>

                        <div className="datos">
                            <p>
                                <img src="" alt="" />
                                <b>Ubicación:</b>Barrio Parque Muñoz
                            </p>
                            <p>
                                <img src="" alt="" />
                                <b>Dirección:</b>Muñoz 225
                            </p>
                            <p>
                                <img src="" alt="" />
                                <b>Enfermera:</b>Silvina Vila
                            </p>
                            <p>
                                <img src="" alt="" />
                                <b>Celular:</b>2292 - 453959
                            </p>
                        </div>

                        <h3 className="profesionales">
                            <img src="" alt="" />PROFESIONALES
                        </h3>

                        <div className="profesional">
                            <b>Caram Ana</b>
                        </div>

                        <div className="profesional">
                            <b>Volkaven Sara Beatriz</b>
                        </div>

                        <div className="profesional">
                            <b>Santangelo Maria</b>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Caps;