import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from '../Component/Header';
import AdminForm from '../Component/AdminForm';
import { Container } from 'react-bootstrap';



function AdminRouter(){
    const match = useRouteMatch();
    return(
        <Switch>
            <Route path={match.path}>
                {/* <Home /> */}
                <Header/>

                {/* <AdminForm/> */}

                
            </Route>
        </Switch>
    )
}

export default AdminRouter;

