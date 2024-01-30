import React from 'react'
import "./HomePage.css"


//Components 
import ClotheListContainer from '../../components/LastClothesListContainer/ClotheListContainer'

const HomePage = () => {
  return (
    <div className='HomePage'>
        <div className='firstSection'>
              <div className='box2'>
                <h1>E-comerce</h1>
                <h2>Es un gusto tenerlo en nuestra Web!</h2>
                <p>Somos "E-comerce" pioneros en la industria de venta de prendas por internet, Nos escantaria ayudarte a encontrar tu prenda deseada. Puedes confiar en nosotros Siempre!</p> 
                <p>Haga click en una de esas tres prendas para ver su vista detallada</p>
              </div>
        </div>
        <div className='secondSection'>
          <ClotheListContainer />
        </div>
    </div>
  )
}

export default HomePage;