import React from "react";
import '../style/components/pages/Servicios.css';

const Servicios = (props) => {
    return (
    // Debe haber un contenedor que contenga el componente, y abra y cierre antes/después de los parentésis.
        <div id="servicios"> 
            <h1>NUESTROS SERVICIOS</h1>
            <p>Brindamos atención médica integral con tecnología de vanguardia</p>

            <div className="tarjetaServicio">
                <img src="./quirofano.jpg" alt="Imagen de quirófano"/>
                <h3>QUIRÓFANO</h3>
                <p>Dos quirófanos completamente equipados y funcionales para realizar distintas intervenciones.</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./laboratorio.jpg" alt="Imagen de laboratorio"/>
                <h3>LABORATORIO</h3>
                <p>Lab. de análisis clínico de nivel 3.</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./terapia.jpg" alt="Imagen de terapia intensiva"/>
                <h3>TERAPIA INTENSIVA</h3>
                <p>Cuatro camas de cuidados intensivos totalmente equipadas.</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./maternidad.jpg" alt="Imagen de maternidad/nursery"/>
                <h3>MATERNIDAD/NURSERY</h3>
                <p>Nursery con incubadoras y servocunas para los recien nacidos y 10 camas de internación.</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./consultorios.jpg" alt="Imagen de consultorios"/>
                <h3>CONSULTORIOS</h3>
                <p>Consultorios con diversidad de especialidades a disposición de los pacientes</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./internacion.jpg" alt="Imagen de internación general"/>
                <h3>INTERNACIÓN GENERAL</h3>
                <p>31 camas para internación general</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./hemoterapia.jpg" alt="Imagen de hemoterapia"/>
                <h3>HEMOTERAPIA</h3>
                <p>Donaciones, transfusiones y almacenamiento de sangre</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./farmacia.jpg" alt="Imagen de farmacia"/>
                <h3>FARMACIA</h3>
                <p>Entrega de distintos tipos de medicamentos a los pacientes, stock controlado por profesionales farmacéuticos</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./guardia.jpg" alt="Imagen de guardia médica"/>
                <h3>GUARDIA MÉDICA</h3>
                <p>Guardia con una sala de reanimación completamente equipada, un consultorio medico y una salas de enfermería. Ademas contamos con camas para internación de observación</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./oncologia.jpg" alt="Imagen de oncología"/>
                <h3>UNIDAD ONCOLÓGICA</h3>
                <p>Atención integral de pacientes con diagnóstico de cáncer.</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./imagenes-medicas.jpg" alt="Imagen de imágenes médicas"/>
                <h3>IMÁGENES MÉDICAS</h3>
                <p>Tomografía, mamografia, ecografía, rayos x. Todo con digitalización directa y visualización en la historia clínica digital</p>
            </div>

            <div className="tarjetaServicio">
                <img src="./pediatria.jpg" alt="Imagen de pediatria"/>
                <h3>PEDIATRÍA</h3>
                <p>Area especialmente diseñada para pediatría con consultorio medico, enfermería y medico de guardia</p>
            </div>
        </div>
    );
}
export default Servicios;