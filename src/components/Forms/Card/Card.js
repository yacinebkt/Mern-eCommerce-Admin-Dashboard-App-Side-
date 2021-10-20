import React from 'react'
import "./style.css"


export default function Card(props) {
    return (
        <div className="card" {...props} style={props.style}>
            
            
            {(props.headerLeft || props.headerRight ) ?
             <div className="cardHeader">
             {
                 props.headerLeft &&
                 <div> { props.headerLeft } </div>
             }

             {
                  props.headerRight &&   props.headerRight 
             }
                   
                   
             </div>

            :null
            
            }

           

            {props.children}
        </div>
    )
}
