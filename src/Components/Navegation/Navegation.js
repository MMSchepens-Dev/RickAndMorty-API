import './Navegation.css';
import {Link} from "react-router-dom";

export default function Navegation() {
  return(
    <header className="navHeader d-flex">
      <h1>Rick & Morty</h1>
      <nav>
        <ul className="d-flex">
          <li className="navLi mx-2"><Link to='/'>Home</Link></li>
          <li className="navLi mx-2"><Link to='/characters'>Characters</Link></li>
          <li className="navLi mx-2"><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}