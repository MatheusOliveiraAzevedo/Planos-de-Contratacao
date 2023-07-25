import Card from '../componentes/card'
import './style.css'

const Mensal = () => {

    return (
        <div className='mensal pagina'>
            <Card classe="card" titulo="Basic" valor="19.99" armazenagem="500 GB" usuarios="2" envios="3"/>
            <Card classe="card cardMaior" titulo="Professional" valor="24.99" armazenagem="1 TB" usuarios="5" envios="10"/>
            <Card classe="card" titulo="Master" valor="39.99" armazenagem="2 TB" usuarios="10" envios="20"/>
        </div>
    )
}

export default Mensal