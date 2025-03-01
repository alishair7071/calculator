
import styles from "../App.module.css"

const Display=({displayVal})=>{

    return <input className={styles.display} type="text" placeholder='0000000' value={displayVal} readOnly/>
}

export default Display;