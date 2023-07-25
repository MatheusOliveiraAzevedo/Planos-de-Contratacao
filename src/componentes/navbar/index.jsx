// import { useState } from 'react'
import './navbar.css'
import { Link } from "react-router-dom"
import Checkbox from '../checkbox'

const Navbar = () => {

    


    return(
        <div className="menuSelecao">
            
           
            <ul>
                <li>
                    <Link to={"./"}>Mensal</Link>
                </li>
                <li>
                    <Checkbox/>
                </li>
                <li>
                    <Link to={"./anual"}>Anual</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar