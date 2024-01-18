'use client'
import { useEffect, useState } from 'react'
import { parseAsInteger, useQueryState } from 'nuqs'
import { toast } from 'sonner'
import { BsPencilSquare, BsTrash3 } from 'react-icons/bs'
import { PageController, InputSelect, InputText, Button, ActionButton } from '@/components'
import { UserForm } from './partials'
import { createUser, deleteUser, getUsers, updateUser } from '@/services'
import { COUNTRY_OPTIONS, DEFAULT_PAGE, DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS, REGION_OPTIONS } from '@/constants'
import type { User, UserToUpdate } from '@/types'
import styles from './page.module.css'

export default function UserDashboard () {
  const [userList, setUserList] = useState<Array<User>>([])
  const [showUserForm, setShowUserForm] = useState<boolean>(false)
  const [userToUpdate, setUserToUpdate] = useState<UserToUpdate | null>(null)
  const [pageSize, setPageSize] = useQueryState('page_size', parseAsInteger)
  const [page, setPage] = useQueryState('page', parseAsInteger)
  const [text, setText] = useQueryState('text')
  const [country, setCountry] = useQueryState('country')
  const [region, setRegion] = useQueryState('region')

  useEffect(() => {
    if (!page) setPage(DEFAULT_PAGE)
    if (!pageSize) setPageSize(DEFAULT_PAGE_SIZE)
    getUsers({ size: pageSize, page, text, country, region }).then((newUserList) => {
      setUserList(newUserList)
    }).catch(() => toast.error('Error when getting users'))
  }, [pageSize, page, setPage, setPageSize, text, country, region])

  const handleDelete = (id: string) => {
    deleteUser(id).then(() => {
      getUsers({ size: pageSize, page, text, country, region }).then((newUserList) => {
        setUserList(newUserList)
      })
      toast.error('User has been deleted')
    }).catch(() => toast.error('Error when deleting user'))
  }

  const handleSubmit = (user: UserToUpdate) => {
    const { id } = user
    if (!id) {
      createUser(user).then(() => {
        getUsers({ size: pageSize, page, text, country, region }).then((newUserList) => {
          setUserList(newUserList)
        })
        toast.success('User has been created')
      }).catch(() => toast.error('Error when creating user'))
    } else {
      updateUser(user).then(() => {
        getUsers({ size: pageSize, page, text, country, region }).then((newUserList) => {
          setUserList(newUserList)
        })
        toast.success('User has been updated')
      }).catch(() => toast.error('Error when updating user'))
    }
    setUserToUpdate(null)
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <section className={styles.topMenu}>
          <div className={styles.filters}>
            <InputText
              value={text}
              onChange={(newText) => {
                setText(newText)
                setPage(DEFAULT_PAGE)
              }}
              placeholder='Search by name or email'
            />
            <InputSelect
              noSelectionLabel='Filter by Country'
              options={COUNTRY_OPTIONS}
              selected={country ?? null}
              onSelectionChange={(newCountry) => setCountry(newCountry)}
            />
            <InputSelect
              noSelectionLabel='Filter by Region'
              options={REGION_OPTIONS}
              selected={region ?? null}
              onSelectionChange={(newRegion) => setRegion(newRegion)}
            />
          </div>
          <Button
            onClick={() => setShowUserForm(true)}
          >
            Create User
          </Button>
        </section>
        <section>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Region</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {userList.map((currentUser, i) => {
                const { id, name, email, country, region } = currentUser
                return (
                  <tr key={i}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{country}</td>
                    <td>{region}</td>
                    <td>
                      <div className={styles.action}>
                        <ActionButton onClick={() => {
                          setUserToUpdate(currentUser)
                          setShowUserForm(true)
                        }}
                        >
                          <BsPencilSquare size={16} />
                        </ActionButton>
                        <ActionButton onClick={() => handleDelete(id)}>
                          <BsTrash3 size={16} />
                        </ActionButton>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
        <section className={styles.bottomMenu}>
          <InputSelect
            options={PAGE_SIZE_OPTIONS}
            selected={pageSize ?? DEFAULT_PAGE_SIZE}
            onSelectionChange={(newPageSize) => setPageSize(Number(newPageSize))}
          />
          <PageController
            currentPage={page ?? DEFAULT_PAGE}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </section>
      </article>
      <UserForm
        user={userToUpdate}
        open={showUserForm}
        onClose={() => {
          setShowUserForm(false)
          setUserToUpdate(null)
        }}
        onSubmit={handleSubmit}
      />
    </main>
  )
}
