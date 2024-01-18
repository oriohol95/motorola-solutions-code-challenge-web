'use client'
import { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

export default function ToasterProvider ({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Toaster position='top-right' richColors duration={2000} />
    </>
  )
}
