import styles from "./success.module.css"
export default function SuccessPage({name}){
    return(
        <div className={styles.body}>
        <div className={styles.success}>
        <i className="fas fa-circle-check" style={{color: "green",fontSize:"48px"}}></i>
        <p><b>{name}!</b>,Your Form is successfully Submitted.</p>
        </div>
        </div>
    )
}