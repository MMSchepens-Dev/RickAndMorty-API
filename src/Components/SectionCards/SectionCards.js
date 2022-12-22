import Card from "../Card/Card";

import "../Card/Card.css"

import "./SectionCards.css"

export default function SectionCards({datos}) {
 
  return(
    <section className="sectionCards row">
      
        {datos.map((dato)=>{return (<Card key={dato.id} info={dato}/>)})}
      
    </section>
    
  )
}