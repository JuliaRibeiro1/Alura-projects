import "./Remove.css"

function Remove(props) {
    
    return (

        <button className="deletarColaboradorBtn">{props.children}</button>
    )
}
export default Remove