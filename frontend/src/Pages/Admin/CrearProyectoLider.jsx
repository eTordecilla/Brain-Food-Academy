import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const CrearProyectoLider = () => {
    return (
        <div>
            <h1><center>Creación de Proyectos</center></h1>
            <h3><center>desde el lider</center></h3>

        <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="nombre">
                <Form.Label>Nombre del proyecto</Form.Label>
                <Form.Control placeholder="Ingrese el nombre del proyecto" />
            </Form.Group>
            <Form.Group as={Col} controlId="presupuesto">    
                <Form.Label>Presupuesto</Form.Label>
                <Form.Control placeholder="Ingrese el presupuesto del proyecto" />
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="objetivo_gral">
                <Form.Label>Objetivo General</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group as={Col} controlId="objetivo_especifico">
                <Form.Label>Objetivos Específicos</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="fecha_inicio">
                <Form.Label>Fecha de inicio</Form.Label>
                <Form.Control placeholder="Ingrese la fecha de inicio del proyecto AAAA-MM-DD" />
            </Form.Group>
            <Form.Group as={Col} controlId="fecha_fin">    
                <Form.Label>Fecha de finalización</Form.Label>
                <Form.Control placeholder="Ingrese la fecha de finalización del proyecto AAAA-MM-DD" />
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="nombre_lider">
                <Form.Label>Nombre del líder del proyecto</Form.Label>
                <Form.Control placeholder="Ingrese el nombre del líder del proyecto" />
            </Form.Group>
            <Form.Group as={Col} controlId="nombre_estudiantes">    
                <Form.Label>Nombre de los estudiantes del proyecto</Form.Label>
                <Form.Control placeholder="Ingrese el nombre de los estudiantes del proyecto" />
            </Form.Group>
            </Row>

            <Row className="mb-3">

                <Form.Group as={Col} controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Select defaultValue="estado">
                    <option>...</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="fase">
                <Form.Label>Fase</Form.Label>
                <Form.Select defaultValue="fase">
                    <option>...</option>
                    <option>Iniciado</option>
                    <option>En desarrollo</option>
                    <option>Terminado</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Button variant="success" type="submit">
                Crear Proyecto
            </Button>
        </Form>
        </div>
    );
};

export default CrearProyectoLider;