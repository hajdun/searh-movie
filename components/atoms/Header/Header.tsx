import React from 'react'
import styles from './Header.module.scss'

interface IHeader {
  children: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return <div className={styles.heading}>{children}</div>
}

export default Header
