import React from 'react'
import styles from './Button.module.scss'

interface IButton {
  type: 'submit' | 'button'
  text: string
  onClick?:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

const Button: React.FC<IButton> = ({ type = 'button', text }) => {
  return (
    <div className={styles.container}>
    <button className={styles.button} type={type}>{text}</button>
    </div>
  )
}

export default Button
