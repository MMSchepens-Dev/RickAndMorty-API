
import "./Home.css"
import HomeListItem from "../HomeListItem/HomeListItem"

export default function Home () {


  return (
    <header className="home">
      <div className="home-div">
        <h1>Project - Rick & Morty</h1>
        <nav className="navbar">
          <ul>
            <HomeListItem dato="Characters" infoPath="/characters"/>
            <HomeListItem dato="Contact" infoPath="/contact"/>
          </ul>
        </nav>
      </div>
    </header>
  )
}
