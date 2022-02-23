import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import {getContact,deleteContact} from "./js/Actions/contactActions"
import {useDispatch,useSelector} from "react-redux"
import Add from './components/Add';
import { Button } from 'react-bootstrap';


function App() {
  const dispatch =useDispatch();
    useEffect(() => {
      dispatch(getContact())
    }, []);

    const contacts=useSelector((state)=>state.conatctList);
    console.log(contacts);

  return (
    
    
    <div className="app">
      <h1 className='title'>API</h1>
      <div>
      <Add/>
      </div>
      {contacts.result? 
      contacts.result.map((el)=>
      <div className="container" style={{width:'290px',height:'300px'}}>
      <h4 style={{ marginTop:'10px' }}>{el.name} </h4>
      <p> {el.age} </p>
      <p> {el.email} </p>
      <Button variant="outline-danger" onClick={()=>dispatch(deleteContact(el._id))} >Delete</Button>
      </div>
      )
      : ( 
        <h1 style={{color:'white'}} >Loading...</h1>
      )}
      
    </div>
  );
}

export default App;