import React from 'react';
import {Table, Form, Col, Button} from 'react-bootstrap';

const ListaUsuarios = () => {
    return (
        <div>
            <h1><center>Lista de usuarios </center></h1>

            <Table striped bordered hover>
        <thead>
            <tr>
            <th>Nombre del Usuario</th>
            <th>Identificación</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Sofía Casas López</td>
            <td>1073408246</td>
            <td>sofiaclopez@gmail.com</td>
            <td>Estudiante</td>
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

export default ListaUsuarios;