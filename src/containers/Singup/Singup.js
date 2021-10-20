import React, {useState, useEffect} from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/Forms/Input/Input";
import Layout from "../../components/Layout/Layout";
import {Redirect} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { SignUp } from "../../actions/user.actions";


export default function Singup() {



  // sTART for label input work // input text
  
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const user = useSelector (state => state.user)  // user in reducer.js

  

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

 // const auth = useSelector(state => state.auth);  // has already been declared.

  // end for label input work // input text
  
  
  
  // sTART for don't show the singup if the user is log in --> go to "Home Page" // VID 12 .. 10.0
  const auth = useSelector (state => state.auth )
  if (auth.authenticate) {
    return <Redirect to={`/`} />
  }
  //END for don't show the singup if the user is log in
 

  if (user.loading) {
    return <p> Loadiing .....! </p>
  }








  const NewUser = (e)=>{

    e.preventDefault(); // for don't refrech the page
    const user = {
      firstName, lastName, email, password
    }
    dispatch(SignUp(user))
  }

  


  return (
    <Layout>
      <Container>

        {user.message}
        <Row style={{ marginTop: "2.5rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={NewUser}>
              <Row>
                <Col md={6}>
                    <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}  // to work 
                    type="text"
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
                </Col>

                <Col md={6}>
                    <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}  // to work 
                    type="text"
                    onChange={(e)=>setLastName(e.target.value)}
                    />
                </Col>
              </Row>

             
                    <Input
                    label="Email"
                    placeholder="Your Emial"
                    value={email}  // to work input text // init =""
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)} // init : {()=>{}}
                    />
               
                
                    <Input
                    label="PassWord"
                    placeholder="PassWord"
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
