import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const BarraNav = () => {
    const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
    const [textButton, setTextButton] = useState('Login')
    const [Name, setName] = useState('')
    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Logout')
            setName (user.name)
        }else{
            setTextButton('Login')
            setName('')

        }
     
    }, [isAuthenticated])

    useEffect(()=>{
        const getToken = async()=>{
            const accessToken = await getAccessTokenSilently();
            localStorage.setItem('token', accessToken)
        }
        if(isAuthenticated){
            getToken();
        }
    }, [isAuthenticated, getAccessTokenSilently])
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Navbar.Brand >Brain Food Academy</Navbar.Brand>

                <Nav className="me-auto">
                <Nav.Link><Link to ='/'>Inicio</Link></Nav.Link>
                <Nav.Link><Link to ='/registro'>Registro</Link></Nav.Link>
                
                {
                    isAuthenticated ?
                        <NavDropdown title={Name} id="navbarScrollingDropdown">
                        <NavDropdown.Item >
                        <Link to='/listaUsuarios'>Lista de Usuarios *Administrador</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item><Link to='/listaProyectosAdministrador'>Lista de Proyectos *Administrador</Link></NavDropdown.Item>
                        <NavDropdown.Item >
                        <Link to='/listaEstudiantes'>Lista de Estudiantes *Lider</Link>
                        </NavDropdown.Item>     
                        <NavDropdown.Item><Link to='/listaProyectos'>Lista de Proyectos *Estudiante, administrador y lider</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/CrearProyecto'>Crear Proyecto *lider</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/listaProyectosLider'>Lista de Proyectos *Lider</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/inscripcionProyecto'>Inscribir un Proyecto *Estudiante- Crear un proyecto *Lider</Link></NavDropdown.Item>
                        <NavDropdown.Item >
                        <Link to='/listaAvances'>Lista de Avances *Estudiante</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                        <Link to='/registroAvances'>Registrar un avance del proyecto *Estudiante</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                        <Link to='/actualizacionInfoUsuarios'>Actualización de datos *Usuarios</Link>
                        </NavDropdown.Item>
                        
                    </NavDropdown> :
                    null
                }
                </Nav>
            </Container>
            {
                isAuthenticated ?
                <button
                onClick ={()=>logout({returnTo: window.location.origin})}
                className = "btn btn-success">{textButton}</button> :
                <button
                onClick ={()=>loginWithRedirect()}
                className = "btn btn-primary">{textButton}</button>
            }
            
        </Navbar>

    );
};

export default BarraNav;