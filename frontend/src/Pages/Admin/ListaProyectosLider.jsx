import React from 'react';
import { Table, Form, Col, Button } from 'react-bootstrap';

const ListaProyectosLider = () => {
    return (
        <div>
           <h1><center>Lista de proyectos</center></h1>
            <h3><center>*desde el lider</center></h3>
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
                    <td>Proyecto 1</td>
                    <td>Objetivo 1</td>
                    <td>Objetivo 1</td>
                    <td>1000000</td>
                    <td>2021-11-10</td>
                    <td>2021-11-30</td>
                    <td>Nombre lider</td>
                    <td>Nombre estudiantes</td>
                    <td>Aprobado</td>
                    <td>En desarrollo</td>
                    <td><Button variant="success" type="submit">Modificar</Button>
                    </td>
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
            <h1><center>Modificación de proyectos</center></h1>
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
                    <td>Proyecto 1</td>
                    <td>Objetivo 1</td>
                    <td>Objetivo 1</td>
                    <td>1000000</td>
                    <td>2021-11-10</td>
                    <td>2021-11-30</td>
                    <td>Nombre lider</td>
                    <td>Nombre estudiantes</td>
                    <td>Aprobado</td>
                    <td>En desarrollo</td>
                    <td><Button variant="success" type="submit">Modificar</Button>
                    </td>
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

export default ListaProyectosLider;