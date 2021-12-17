import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap'

const ActualizacionInfoUsuarios = () => {
    return (
        <div>
            <h1><center>Actualización de datos de usuarios</center></h1>

            <Form>
                
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control placeholder="Ingrese su nombre completo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="identificación">
                    <Form.Label>Identificación</Form.Label>
                    <Form.Control placeholder="Ingrese su identificacion" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="rol">
                    <Form.Label>Rol</Form.Label>
                    <Form.Select defaultValue="rol">
                        <option>...</option>
                        <option>Administrador</option>
                        <option>Líder</option>
                        <option>Estudiante</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select defaultValue="estado">
                        <option>...</option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                    </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="success" type="submit">
                    Actualizar usuario
                </Button>
            </Form>
        </div>
    );
};

export default ActualizacionInfoUsuarios;