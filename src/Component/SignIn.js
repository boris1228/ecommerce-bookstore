
import {Container, Form, FormGroup, Button, FormLabel} from 'react-bootstrap';



export default function SignIn(){
    

    return (
        <Container>
            <Form className="form-container">
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <Form.Control 
                    name="email"
                    type="email"
                    />

                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <Form.Control 
                    name="password"
                    type="password"
                    />
                </FormGroup>

                <Button className="mt-4" variant="primary" block>
                    Sign In
                </Button> 

                <Button className="mt-4" variant="primary" block>
                    Register
                </Button> 
            </Form>

        </Container>
    )
}