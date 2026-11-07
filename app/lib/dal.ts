import 'server-only'

import { cache } from 'react'
import { redirect } from 'next/navigation'
import { getSession } from '@/app/lib/session'

export const verifySession = cache(async () => {
  const token = await getSession()

  if (!token) {
    redirect('/login')
  }

  return { isAuth: true, token }
})