import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Container, Form, FormGroup, Button, FormLabel} from 'react-bootstrap';


import {auth} from './firebase';

export default function SignIn(){
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(error=>alert(error.message));

    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error=>alert(error.message));
    }
    

    return (
        <Container>
            <Form className="form-container">
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <Form.Control 
                    name="email"
                    type="email"
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                    />

                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <Form.Control 
                    name="password"
                    type="password"
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    />
                </FormGroup>

                <Button className="mt-4" variant="primary" onClick={signIn} block>
                    Sign In
                </Button> 

                <Button className="mt-4" variant="primary" onClick={register} block>
                    Register
                </Button> 
            </Form>

        </Container>
    )
}