// import { useState } from 'react'
import './navbar.css'
import Checkbox from '../checkbox'

const Navbar = () => {

    


    return(
        <div className="menuSelecao">
            
           
            <ul>
                <li>
                    Mensal
                </li>
                <li>
                    <Checkbox/>
                </li>
                <li>
                    Anual
                </li>
            </ul>
        </div>
    )
}

export default Navbar
