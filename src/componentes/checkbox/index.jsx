import './checkbox.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Checkbox = () => {

    const history = useNavigate();
    let [selecionado, setSelecionado] = useState(false);
    
    function checado (event) {
        

        if (event.target.checked) {
            setSelecionado(true)
            history('/anual')
        } else {
            setSelecionado(false)
            history('/')
        }
    }

    return(
        <div class="bauble_box">
	        <input onChange={checado} class="bauble_input" id="bauble_check" name="bauble" type="checkbox" checked={selecionado}/>
	        <label class="bauble_label" for="bauble_check">Toggle</label>
        </div>
    )
}

export default Checkbox