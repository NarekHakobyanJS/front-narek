import style from './Modal.module.css'

export const Modal = () => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        text
      </div>
    </div>
  )
}

