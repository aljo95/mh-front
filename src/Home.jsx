import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx';


function Home() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <NavBar />
            <div id="welcome-text">
                    <h1>Hundutbildning med kvalitet!</h1>
                </div>
            <div id="text-image-1">
                <div id="text-1">
                    <p className="home-p">Vår träningsfilosofi följer aktuell forskning och beprövad vetenskap. ALL träning bygger på positiv förstärkning och belöning. Det skall ALLTID kännas bra för hund och förare vid aktivering och träning.
                    <br></br><br></br>
                        Vi fokuserar på kvalitet och kompetens under professionell ledning.
                        <br></br><br></br>
                        MeraHund drivs och ägs av Marianne Nordahl som har en hög och bred kompetens och erfarenhet inom ämnet hund, pedagogik och kursverksamhet.
                    </p>
                </div>
                <div id="image-1">
                    <img id="img-1" src="src\assets\leia1.jpg" alt="Hundbild e1" />
                </div>
            </div>
            <div id="text-image-2">
                <div id="image-2">
                    <img id="img-2" src="src\assets\leia1.jpg" alt="Hundbild e1" />
                </div>
                <div id="text-2">
                    <p>22222222222222222222222222</p>
                </div>
            </div>
            <div id="text-after-images">
                <p>TEXT AAAAAAAAAAAAFTEREEEEEEEEEEEEEEEEEE</p>
            </div>
      </>
    )
  }
  
  export default Home