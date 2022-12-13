export default function HomeListItem({dato,otroDato}){
  const mostrar =()=>{
    console.log(otroDato)
    alert(otroDato)
  }

  return(
    <li onClick={mostrar}>{dato}</li>
  )
}