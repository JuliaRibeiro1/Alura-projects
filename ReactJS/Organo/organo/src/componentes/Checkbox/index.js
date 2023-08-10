import "./Checkbox.css"

function Checkbox(props) {
    const aoCheck = () => {
        props.aoAlterado(prev => !prev)
     
    }
    return (
        <div>
            <div className="div-label">{props.label}</div>
            <div class="checkbox-wrapper-6">
                <input class="tgl tgl-light" id="cb1-6" type="checkbox" value={props.valor} onChange={aoCheck}/>
                <label class="tgl-btn" for="cb1-6"></label>
            </div>
        </div>
      
    
    )
}

export default Checkbox
