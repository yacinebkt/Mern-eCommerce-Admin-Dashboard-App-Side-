import React from 'react'
import {Form} from "react-bootstrap"
import "./style.css"


export default function Input(props) {

    let input = null; 
    switch (props.type) {
      case 'select' : 

      input = 

      <Form.Group /*controlId="formBasicEmail"*/>
            {props.label && <Form.Label>{props.label}</Form.Label>} 
            <select className = "form-control " 
            value ={props.value}
            onChange= {props.onChange}
            >
              <option value=""> {props.placeholder} </option>

              {
                props.options.length > 0 ?
                props.options.map((option, index) =>
                  
                  <option key = {index} value ={option.value}>
                    {option.name}
                  </option>
                ) : null
              }
            </select>
      </Form.Group>
        break;




      case 'text' : 
      default : 
        input = 

          <Form.Group /*controlId="formBasicEmail"*/>
                {props.label && <Form.Label>{props.label}</Form.Label>} 
                <Form.Control
                  type={props.type}
                  placeholder={props.placeholder}
                  value={props.value}
                  onChange={props.onChange}
                  onKeyDown ={props.onKeyDown}
                  onSelect = {props.onSelect}
                  onFocus = {props.onFocus}
                  onBlur  = {props.onBlur}
                  list ={props.list}
                  className={props.className}
                  data-placeholder={props.dataPlaceholder}
                  onChangeText = {props.onChangeText}
                  required = {props.required}


                   />
                <Form.Text className="text-muted">
                  {props.erroeMessage}
                </Form.Text>
          </Form.Group>
 
    }


    return (
       input
    )
}
