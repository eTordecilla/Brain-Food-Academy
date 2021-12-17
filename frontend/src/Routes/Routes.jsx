import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import ListaProyectosEstudiante from '../Pages/Admin/ListaProyectosEstudiante';
import ListaProyectosAdministrador from '../Pages/Admin/ListaProyectosAdministrador';
import ListaProyectosLider from '../Pages/Admin/ListaProyectosLider';
import CrearProyectoLider from '../Pages/Admin/CrearProyectoLider';
import ListaAvances from '../Pages/Admin/ListaAvances';
import InscripcionProyecto from '../Pages/Admin/InscripcionProyecto';
import RegistroAvances from '../Pages/Admin/RegistroAvances';
import ActualizacionInfoUsuarios from '../Pages/Admin/ActualizacionInfoUsuario';
import ListaUsuarios from '../Pages/Admin/ListaUsuarios';
import ListaEstudiantes from '../Pages/Admin/ListaEstudiantes';
import Registro from '../Pages/Public/Registro';
import Index from '../Pages/Public/Index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/listaProyectosEstudiante', '/listaProyectosAdministrador', '/listaProyectosLider','/listaAvances','/inscripcionProyecto', '/registroAvances', '/actualizacionInfoUsuarios', '/listaUsuarios', '/listaEstudiantes', '/CrearProyecto']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/listaProyectosEstudiante'>
                                <ListaProyectosEstudiante/>
                            </Route>
                            <Route path ='/CrearProyecto'>
                                <CrearProyectoLider/>
                            </Route>
                            <Route path='/listaProyectosAdministrador'>
                                <ListaProyectosAdministrador/>
                            </Route>
                            <Route path='/listaProyectosEstudiante'>
                                <ListaProyectosEstudiante/>
                            </Route>
                            <Route path='/listaProyectosLider'>
                                <ListaProyectosLider/>
                            </Route>
                            <Route path ='/listaAvances'>
                                <ListaAvances/>
                            </Route>
                            <Route path ='/inscripcionProyecto'>
                                <InscripcionProyecto/>
                            </Route>
                            <Route path ='/registroAvances'>
                                <RegistroAvances/>
                            </Route>
                            <Route path ='/actualizacionInfoUsuarios'>
                                <ActualizacionInfoUsuarios/>
                            </Route>
                            <Route path ='/listaUsuarios'>
                                <ListaUsuarios/>
                            </Route>
                            <Route path ='/listaEstudiantes'>
                                <ListaEstudiantes/>
                            </Route>
                        </Switch>
                    </PrivateLayout>

                </Route>
                <Route path ={['/registro','/']}>
                    <PublicLayout>
                        <Switch>
                            <Route path = '/registro'>
                                <Registro/>
                            </Route>
                            <Route path ='/'>
                                <Index/>
                            </Route>
                        </Switch>
                    </PublicLayout>
                </Route>

            </Switch>
        </Router>
    );
};

export default Routes;