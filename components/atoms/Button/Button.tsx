import React from 'react'
import styles from './Button.module.scss'

interface IButton {
  type?: 'submit' | 'button';
  style?: 'small' | 'default'
  text: string;
  id: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButton> = ({
  type = 'button',
  text,
  id,
  onClick = null,
  style = 'default'
}) => {
  if (onClick) {
    return (
      <div className={style === 'default' ? styles.container : styles.small}>
        <button className={styles.button} type={type} onClick={onClick} data-testid={id}>
          {text}
        </button>
      </div>
    )
  }

  return (
    <div className={style === 'default' ? styles.container : styles.small}>
      <button className={styles.button} type={type} data-testid={id}>
        {text}
      </button>
    </div>
  )
}

export default Button
