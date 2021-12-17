import React from 'react';
import {Table, Col, Form, Button} from 'react-bootstrap';

const ListaEstudiantes = () => {
    return (
        <div>
            <h1><center>Lista de estudiantes</center></h1>
            <h3><center>*desde el lider</center></h3>
            <Table striped bordered hover>
        <thead>
            <tr>
            <th>Nombre del Usuario</th>
            <th>Identificación</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Modificar Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Sofía Casas López</td>
            <td>1073408246</td>
            <td>sofiaclopez@gmail.com</td>
            <td>Estudiante</td>
            <td>Pendiente</td>
            <td><Form.Group as={Col} controlId="estado">
                <Form.Select defaultValue="estado">
                    <option>...</option>
                    <option>Pendiente</option>
                    <option>Autorizado</option>
                    <option>No Autorizado</option>
                </Form.Select>
                </Form.Group></td>
            <td><Button variant="success" type="submit">
                Guardar cambios
            </Button></td>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
        </tbody>
        </Table>
        </div>
    );
};

export default ListaEstudiantes;