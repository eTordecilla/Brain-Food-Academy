import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNav from '../../Components/BarraNav';

const ListaProyectosEstudiante = () => {
    return (
        <div>
           <h1><center>Lista de Proyectos</center></h1>
           <h3>El administrador aprueba el proyecto cambia de estado
               Activa o inactiva un proyecto, cambia fase de en desarrollo a terminado, el lider mira la lista de proyectos que lidera Tanto los que están en estado
“Activo” como “Inactivo”. En la interfaz del lider requiera actualizar los datos de uno de los proyectos que lidero y que
está en estado “Activo”podré editar la información relacionada al proyecto cuya información
necesito actualizar Solamente puede actualizar: Nombre del proyecto, los
objetivos generales, específicos y el presupuesto</h3>
           <Table striped bordered hover>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Objetivo General</th>
            <th>Objetivo Específico</th>
            <th>Presupuesto</th>
            <th>Fecha inicio</th>
            <th>Fecha fin</th>
            <th>Nombre líder</th>
            <th>Nombre estudiantes</th>
            <th>Estado</th>
            <th>Fase</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        </tbody>
        </Table>

        </div>
    );
};

export default ListaProyectosEstudiante;