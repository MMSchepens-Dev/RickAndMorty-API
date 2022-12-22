export default function Card({info}) {
  const mostrar =()=>{
    console.log(info)
  }

  return (
    <div className="card m-2 p-2">
      <img src={info.image} alt={info.name} className="cardImg"/>
      <h3 className="name">{info.name}</h3>
      <button className="botonCard align-self-end btn-active" onClick={mostrar}>Now More..</button>
    </div>
  )
}