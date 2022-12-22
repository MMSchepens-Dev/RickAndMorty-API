import './HomeListItem.css';
import {Link} from "react-router-dom";

export default function HomeListItem({dato,infoPath}){
  

  return(
    <li className="boton"><Link to={infoPath}>{dato}</Link></li>
  )
}