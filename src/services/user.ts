import { GetUsersFilters, User, UserToUpdate } from '@/types'

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://motorola-solutions-code-challenge-api.vercel.app'

export const getUsers = ({
  country,
  region,
  text,
  page,
  size
}: GetUsersFilters): Promise<Array<User>> => {
  return fetch(`${NEXT_PUBLIC_API_URL}/users?page=${page ?? '1'}&size=${size || '10'}${country ? `&country=${country}` : ''}${region ? `&region=${region}` : ''}${text ? `&text=${text}` : ''}`)
    .then((r) => r.json())
}

export const deleteUser = (id: string): Promise<boolean> => {
  return fetch(`${NEXT_PUBLIC_API_URL}/users/${id}`, {
    method: 'DELETE'
  }).then((r) => r.json())
}

export const createUser = (user: UserToUpdate): Promise<boolean> => {
  return fetch(`${NEXT_PUBLIC_API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((r) => r.json())
}

export const updateUser = (user: UserToUpdate): Promise<boolean> => {
  return fetch(`${NEXT_PUBLIC_API_URL}/users/${user.id}`, {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((r) => r.json())
}
