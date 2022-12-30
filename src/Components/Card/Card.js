import {useState} from 'react';

export default function Card({info}) {
  const [ocultar,setOcultar]=useState(true);
  const mostrar =()=>{
    console.log(info)
    setOcultar(false)
  }
  const ocultarInfo=()=>{
    setOcultar(true)
  }
  
  return (
    <div className="d-flex flex-row card m-2 p-2 justify-content-between align-items-center">

      <div className="d-flex flex-column justify-content-between align-items-center">
        <img src={info.image} alt={info.name}/>
        <h3 className="name">{info.name}</h3>
        {ocultar? <button className="botonCard" onClick={mostrar}>More...</button>:''}
      </div>
      {ocultar === false?
      <div className="d-flex flex-column cardTwo">
        <button className="botonX" onClick={ocultarInfo}>X</button>
        <ul className="list-group">
          <li className="cardLi list-group-item">
            <div className="fw-bold">Character Status{info.status}</div>
            </li>
          <li className="cardLi list-group-item">
            <div>Species</div>
            {info.species}
            </li>
          <li className="cardLi list-group-item">
            <div className="fw-bold">Origin</div>
            {info.origin.name}
            </li>
          <li className="cardLi list-group-item">
            <div className="fw-bold">Gender</div>
          {info.gender}</li>
        </ul>
      </div>:''}
    </div>
  )
} 