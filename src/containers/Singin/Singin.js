import React, {useState,/* useEffect*/} from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/Forms/Input/Input";
import Layout from "../../components/Layout/Layout";


//
import {/*isUserLoginIn,*/ login} from '../../actions/actions'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Singin(props) {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);


  const dispatch = useDispatch();
/* moveit to app.js
  // useEffect hoks for vérifer id login or not 
  useEffect( () =>{
    // check if user authenticate 
    if (!auth.authenticate) {
      // if not chek if token existe in localstorage --> if existe => user -> login
      dispatch(isUserLoginIn());
    }
    

  }, []);

*/
  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      
      email, password

      /*email:'yaci@gmail.com',
      passwoed: "123456789"*/
    }

    dispatch(login(user)); 

  }

  if (auth.authenticate) {
    return <Redirect to={`/`} />
  }


  return (
    <Layout>
      <Container>
        <Row style={{marginTop:"2.5rem"}}>
          <Col md={{span:6, offset:3}}>
            <Form onSubmit ={ userLogin}>
            <Input
                    label="Email"
                    placeholder="Your Emial"
                    value={email}
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
            />

            <Input
                    label="Password"
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
            />
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
