'use client'
import styles from './input-text.module.css'

type Props = {
  value?: string | null;
  onChange?: (newSearch: string | null) => void;
  placeholder?: string;
}

export default function InputText ({
  value,
  onChange = () => {},
  placeholder
}: Props) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={styles.input}
      value={value ?? ''}
      onChange={(e) => {
        if (!e.target.value) onChange(null)
        else onChange(e.target.value)
      }}
    />
  )
}
