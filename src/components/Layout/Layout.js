import React from 'react'
import Header from '../Header/Header'
import {  Row, Col, Container } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import "./style.css"



export default function Layout(props) {
    return (
        <>
        <Header/>
        {
            props.sidebar ?
            
                 <Container fluid>
                {/* fluid for delet the space of conatiner */}

                    <Row>
                        <Col md={2} className="sidebar">
                        <ul>
                            <li>
                            <NavLink exact to ="/">
                                Home
                            </NavLink>
                            </li>

                            <li>
                            <NavLink to ="/page">
                                Page
                            </NavLink>
                            </li>

                            <li>
                            <NavLink to ="/products">
                                Products
                            </NavLink>
                            </li>

                            <li>
                            <NavLink to ="/category">
                                Category
                            </NavLink>
                            </li>
                            
                            <li>
                            <NavLink to ="/brands">
                                Brands
                            </NavLink>
                            </li>
                            

                            <li>
                            <NavLink to ="/orders">
                                Orders
                            </NavLink>
                            </li>

                            <li>
                            <NavLink to ="/settings">
                             Settings
                            </NavLink>
                            </li>
                        </ul>
                        </Col>

                        <Col md={10} className="main" > 
                       { props.children }
                        </Col>
                    </Row>



                </Container>
            :

            props.children

                    


        }
       
        </>
    )
}
