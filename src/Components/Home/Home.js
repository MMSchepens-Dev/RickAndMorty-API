import "./Home.css"
import HomeListItem from "../HomeListItem/HomeListItem"
import {useState} from 'react';

export default function Home () {

    let [unValor,setValor]=useState(true);

    const cambiarValor=()=>{
      setValor(false)
    }

  return (
    <header className="Home">
        <h1 onMouseOver={cambiarValor}>HOLA RETURN HOME JS</h1>
        <nav>
          <ul>
            <HomeListItem dato="Characters" otroDato={unValor}/>
            <HomeListItem dato="Contact"/>
          </ul>
        </nav>
    </header>
  )
}
