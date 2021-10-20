import React from 'react'
import { Redirect, Route } from 'react-router'

const privateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} component= {(props) =>{

        const token = window.localStorage.getItem('token');
        if (token) {
            return <Component {...props} />
        }
        else{
            return <Redirect to = {`/singin`} />
        } 

    }} />
}

export default privateRoute
