'use client'
import { PropsWithChildren, useEffect, useRef } from 'react'
import styles from './dialog.module.css'

type Props = {
  open?: boolean
  onClose?: () => void;
}

export default function Dialog ({
  open = false,
  onClose = () => {},
  children
}: PropsWithChildren<Props>) {
  const dialogRef = useRef<any>(null)

  useEffect(() => {
    if (open) dialogRef.current.showModal()
    else {
      dialogRef.current.close()
      onClose()
    }

    const onKeyDown = (e: any) => e.key === 'Escape' && open && onClose()

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
    >
      {children}
    </dialog>
  )
}
