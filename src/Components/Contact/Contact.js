import './Contact.css'
import Navegation from '../Navegation/Navegation';
import {useState} from 'react';
import {Fragment} from 'react';

export default function Contact(){

    let [inputNombre,setInputNombre]= useState('')  
    const registerData =(event)=>{
      setInputNombre(event.target.value)
    }
const mostrar=()=>{
  console.log(inputNombre)
}

    return(
    <Fragment>
      <Navegation/>
       <div className="contactDiv">
        <h2 className="contactTitle">Contact</h2>
        <h3 className="formTitle">Leave us your information so we can contact you</h3>
        <form  action="https://formspree.io/f/mpzezpej" method="post" className="form row g-3 mx-4">

          <div className="col-md-6">
            <label htmlFor="nombre" className="form-label">Name</label>
            <input type="text" className="form-control" id="nombre" value={inputNombre} onChange={registerData} onBlur={mostrar}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="correo" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="col-12">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea id="mensaje" className="form-control"></textarea>
          </div>
        
          <div className="col-12">
            <button type="submit" className="botonForm">Send</button>
          </div>
        </form>
      </div>
    </Fragment>   
    )
}