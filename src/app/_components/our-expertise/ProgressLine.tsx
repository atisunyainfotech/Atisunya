import styles from "./styles.module.css"

const ProgressLine = () => {
  return (
    <div className={`absolute -bottom-1 left-0 h-1 bg-blue rounded-sm w-0 ${styles.progressLine}`}></div>
  )
}

export default ProgressLine