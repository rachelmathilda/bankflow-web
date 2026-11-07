'use server'

import { redirect } from 'next/navigation'
import { api } from '@/app/lib/api'
import { createSession, deleteSession } from '@/app/lib/session'
import type { FormState } from '@/app/lib/definitions'

async function authenticate(
  path: string,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email')
  const password = formData.get('password')

  if (typeof email !== 'string' || typeof password !== 'string') {
    return { message: 'Email dan password wajib diisi' }
  }

  let token: string
  try {
    const res = await api.post(path, { username: email, password })
    token = res.data.token
  } catch {
    return { message: 'Gagal, periksa kembali data kamu' }
  }

  await createSession(token)
  redirect('/dashboard')
}

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  return authenticate('/api/v1/auth/register', formData)
}

export async function signin(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  return authenticate('/api/v1/auth/login', formData)
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}