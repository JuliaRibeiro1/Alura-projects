import "./Checkbox.css"

function Checkbox({valor,label,aoAlterado}) {
    
    const aoCheck = () => {
        aoAlterado(prev => !prev)
     
    }
    return (
        <div>
            <div className="div-label">{label}</div>

            <div className="checkbox-wrapper-6">
                <input className="tgl tgl-light" id="cb1-6" type="checkbox" value={valor} onChange={aoCheck}/>
                <label className="tgl-btn" htmlFor="cb1-6"></label>
            </div>
            
        </div>
      
    
    )
}

export default Checkbox
