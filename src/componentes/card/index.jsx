import './Card.css'

const Card = ({ titulo, valor, armazenagem, usuarios, envios, classe}) => {

    return(
        <section className={classe}>
            <h2>{titulo}</h2>
            <section className='valorPlano beneficios'>
                <p className='cifrao'>$ </p>
                <p className='preco'>{valor}</p>
            </section>
            <p className='beneficios'>{armazenagem + " de Armazenamento"}</p>
            <p className='beneficios'>{usuarios + " Usuarios Permitidos"}</p>
            <p className='beneficios'>{"Envie até " + envios + "GB"}</p>
            <button className='botao botaoCardMaior'>VER MAIS</button>
        </section>
    )
}

export default Card