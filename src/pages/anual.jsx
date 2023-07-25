import './style.css'
import Card from '../componentes/card'

const Anual = () => {

    return(
        <div className='anual pagina'>
            <Card classe="card" titulo="Basic" valor="199.99" armazenagem="500 GB" usuarios="2" envios="3"/>
            <Card classe="card cardMaior" titulo="Professional" valor="249.99" armazenagem="1 TB" usuarios="5" envios="10"/>
            <Card classe="card" titulo="Master" valor="399.99" armazenagem="2 TB" usuarios="10" envios="20"/>
        </div>
    )
}

export default Anual