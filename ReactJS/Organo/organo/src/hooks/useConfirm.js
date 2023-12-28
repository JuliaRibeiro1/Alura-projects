import React from 'react'
import styles from "./useConfirm.module.css"
function useConfirm(mensagem) {

    const [confirm, setConfirm] = React.useState(null)
    const ConfirmComponent = () => {
        return (
            <div className={styles.wrapper}>
            <div className={`${styles.confirm} ${confirm !== null && "fechar"} center`} >
                <h2>{mensagem}</h2>
                <button onClick={() => setConfirm(true)}>Sim</button>
                <button onClick={() => setConfirm(false)}>Não</button>
            </div>
            </div>
        )
    }
  return {
    ConfirmComponent,
    confirm
  }
}

export default useConfirm