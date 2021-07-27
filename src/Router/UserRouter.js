import { Route, Switch, useRouteMatch} from 'react-router-dom';

import SignIn from '../Component/SignIn';
import Registration from '../Component/Register';



export default function UserRouter(){
    const match = useRouteMatch();
    return(
        <Switch>
            <Route path={`${match.path}/sign-in`}>
                <SignIn />
            </Route>

            <Route path={`${match.path}/register`}>
                <Registration />
            </Route>
   
        </Switch>
    )

}

