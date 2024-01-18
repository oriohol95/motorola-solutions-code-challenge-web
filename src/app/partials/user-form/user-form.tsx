'use client'
import { useEffect, useState } from 'react'
import { Button, Dialog, InputSelect, InputText } from '@/components'
import { COUNTRY_OPTIONS, REGION_OPTIONS } from '@/constants'
import { UserToUpdate } from '@/types'
import styles from './user-form.module.css'

type Props = {
  user?: UserToUpdate | null,
  open?: boolean
  onClose?: () => void;
  onSubmit?: (user: UserToUpdate) => void
}

export default function UserForm ({
  user,
  open = false,
  onClose = () => {},
  onSubmit = () => {}
}: Props) {
  const isNewUser = !user
  const [name, setName] = useState<string | null>(user?.name ?? '')
  const [email, setEmail] = useState<string | null>(user?.email ?? '')
  const [country, setCountry] = useState<string | null>(user?.country ?? '')
  const [region, setRegion] = useState<string | null>(user?.region ?? '')

  useEffect(() => {
    if (!user) {
      setName('')
      setEmail('')
      setCountry('')
      setRegion('')
      return
    }
    const { name, email, country, region } = user
    if (!name || !email || !country || !region) return
    setName(name)
    setEmail(email)
    setCountry(country)
    setRegion(region)
  }, [user])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!name || !email || !country || !region) {
      console.log('error')
      return
    }
    onSubmit({
      id: user?.id ?? null,
      name,
      email,
      country,
      region
    })
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <section className={styles.wrapper}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <section className={styles.body}>
            <h3>{isNewUser ? 'Create New User' : 'Update User'}</h3>
            <InputText
              value={name}
              onChange={setName}
              placeholder='Name'
            />
            <InputText
              value={email}
              onChange={setEmail}
              placeholder='Email'
            />
            <InputSelect
              noSelectionLabel='Country'
              options={COUNTRY_OPTIONS}
              selected={country ?? null}
              onSelectionChange={setCountry}
            />
            <InputSelect
              noSelectionLabel='Region'
              options={REGION_OPTIONS}
              selected={region ?? null}
              onSelectionChange={setRegion}
            />
          </section>
          <section className={styles.footer}>
            <Button
              secondary
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type='submit'>
              {isNewUser ? 'Create User' : 'Update User'}
            </Button>
          </section>
        </form>
      </section>
    </Dialog>
  )
}
