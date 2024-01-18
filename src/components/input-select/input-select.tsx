'use client'
import styles from './input-select.module.css'

type Option = {
  label: string;
  value: any;
}

type Props = {
  options: Array<Option>;
  selected: any;
  onSelectionChange: (newSelection: any) => void;
  noSelectionLabel?: string;
}

export default function InputSelect ({
  options = [{ label: 'Label 1', value: 1 }, { label: 'Label 2', value: 2 }],
  selected,
  onSelectionChange = () => {},
  noSelectionLabel
}: Props) {
  return (
    <select
      className={styles.select}
      onChange={(e) => {
        if (!e.target.value) onSelectionChange(null)
        else onSelectionChange(e.target.value)
      }}
    >
      {noSelectionLabel && <option value='' selected={!selected}>{noSelectionLabel}</option>}
      {options.map(({ label, value }, i) => {
        return (
          <option
            key={i}
            value={value}
            selected={value === selected}
          >
            {label}
          </option>
        )
      })}
    </select>
  )
}
