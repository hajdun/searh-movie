import React from 'react'
import styles from './Button.module.scss'

interface IButton {
  type?: 'submit' | 'button';
  text: string;
  id: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButton> = ({
  type = 'button',
  text,
  id,
  onClick = null
}) => {
  if (onClick) {
    return (
      <div className={styles.container}>
        <button className={styles.button} type={type} onClick={onClick} data-testid={id}>
          {text}
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} type={type}>
        {text}
      </button>
    </div>
  )
}

export default Button
