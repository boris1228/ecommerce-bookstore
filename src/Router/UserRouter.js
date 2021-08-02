import { Route, Switch, useRouteMatch} from 'react-router-dom';

// import SignIn from '../Component/SignIn';
// import Registration from '../Component/Register';
import SignIn from '../Component/SignIn';
import Checkout from '../Component/Checkout';


export default function UserRouter(){
    const match = useRouteMatch();
    return(
        <Switch>
            <Route path={`${match.path}/sign-in`}>
                <SignIn />
            </Route>

            {/* <Route path={`${match.path}/register`}>
                <Registration />
            </Route> */}
   <Route path={`${match.path}/check-out`}>
                <Checkout />
            </Route>
        </Switch>
    )

}

