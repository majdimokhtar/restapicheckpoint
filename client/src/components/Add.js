import React, { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import {addContact} from '../js/Actions/contactActions'
import {useDispatch} from "react-redux"


function Add() {
    const dispatch =useDispatch();

    const [newContact, setnewContact] = useState({
      name:"",email:"",age:""
    })
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        
      <Button variant="danger" onClick={handleShow}>
       Add User
      </Button>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
                <div>
                  <label className='input'>Name:</label>
                  <input type="text" name="name" onChange={(e)=>setnewContact({...newContact,name:e.target.value})} />
                </div>

                <div>
                  <label className='input'>Age:</label>
                  <input type="text" name="age" onChange={(e)=>setnewContact({...newContact,age:e.target.value})}/>
                </div>

                <div>
                  <label className='input'>Email:</label>
                  <input type="text" name="email" onChange={(e)=>setnewContact({...newContact,email:e.target.value})}/>
                </div>

                </div>
          </Modal.Body>
          <Modal.Footer>
            

            <button type="button" class="btn btn-outline-secondary" onClick={handleClose}>Close</button>

            
            <Button variant="success" onClick={()=>dispatch(addContact(newContact))} >Add</Button>{' '}

          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Add;