import React from 'react'
import Profile from './Profile'
import p1 from '../assets/contestants/Peter_Obi.jpg'
import p2 from '../assets/contestants/Tinubu.jpg'
import g1 from '../assets/contestants/Sanwo-Olu.jpg'
import g2 from '../assets/contestants/Datti-Baba.jpg'
import './Vote.css'

function Vote() {
  return (
    <div>
        <h2>Presidential Election</h2>
        <div className="electees">
            <Profile name="Peter Obi" img={p1} />
            <Profile name={"Bola Tinubu" } img={p2}/>
        </div>
        <h2>Governorship Election</h2>
        <div className="electees">
            <Profile name="Sanwo Olu" img={g1} />
            <Profile name={"Datti Baba" } img={g2}/>
        </div>
    </div>
  )
}

export default Vote