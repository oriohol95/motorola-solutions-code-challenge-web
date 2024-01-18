'use client'
import { PropsWithChildren } from 'react'
import styles from './button.module.css'

type Props = {
  secondary?: boolean
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
}

export default function Button ({
  secondary = false,
  type = 'button',
  onClick = () => {},
  children
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      className={`${styles.button} ${secondary && styles.secondary}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
