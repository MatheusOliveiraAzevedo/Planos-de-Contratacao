import { Outlet } from 'react-router-dom'
import './style.css'
import Navbar from '../componentes/navbar'

const Opcoes = () => {

    return(
        <div className='opcoes'>
            <h1 className='tituloPagina'>Nossos Preços</h1>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Opcoes