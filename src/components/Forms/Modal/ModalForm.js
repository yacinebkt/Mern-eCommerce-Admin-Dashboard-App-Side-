import React from 'react'
import {Modal, Button} from "react-bootstrap"   
import "./style.css"



export default function ModalForm(props) {
    return (
        
        <Modal className="Modal-Container" show={props.show} onHide={props.handleClose} size={props.size} onClick={props.onClick} >
        <Modal.Header className="Modal-Header" closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>

        </Modal.Header>
       <Modal.Body>

           {props.children}

        {/*   
            <Input
                label=" Name "
                placeholder="Category Name *"
                value={categoryName}
                type="text"
                onChange={(e) =>{setCategoryName(e.target.value)}}
            />
        */}

        </Modal.Body>

   
        <Modal.Footer>

            {
                props.buttons ? props.buttons.map( (btn, index) =>
                    <Button key={index } variant={btn.color} onClick={btn.onClick} type={btn.type} >
                         {btn.label}
                    </Button>
                ):

                <Button variant="primary" {...props}
                 onClick={props.onSubmit} style={{backgroundColor:"#444"}}>
                    Save 
                </Button>


            }
       
      
        </Modal.Footer>
    </Modal>

    )
}
