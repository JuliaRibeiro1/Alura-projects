import "./Checkbox.css"

function Checkbox(props) {
    const aoCheck = () => {
        props.aoAlterado(prev => !prev)
     
    }
    return (
        <div>
            <div className="div-label">{props.label}</div>

            <div className="checkbox-wrapper-6">
                <input className="tgl tgl-light" id="cb1-6" type="checkbox" value={props.valor} onChange={aoCheck}/>
                <label className="tgl-btn" htmlFor="cb1-6"></label>
            </div>
            
        </div>
      
    
    )
}

export default Checkbox
