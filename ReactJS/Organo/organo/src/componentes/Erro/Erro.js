import React from 'react'
import styles from "./Erro.module.css"
function Erro({mensagem}) {
  return (
    <p className={`${styles.erro} + shake}`} >{mensagem}</p>
  )
}

export default Erro