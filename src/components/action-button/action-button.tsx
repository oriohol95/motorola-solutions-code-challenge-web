'use client'
import { PropsWithChildren } from 'react'
import styles from './action-button.module.css'

type Props = {
  onClick?: (e: any) => void;
}

export default function ActionButton ({
  onClick = () => {},
  children
}: PropsWithChildren<Props>) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
