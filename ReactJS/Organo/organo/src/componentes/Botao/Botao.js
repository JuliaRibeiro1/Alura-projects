import "./Botao.css"

const Botao = (props) => {
    return (
       
        <button className={props.className}>
            {props.children}
        </button>
  
    )
}
export default Botao