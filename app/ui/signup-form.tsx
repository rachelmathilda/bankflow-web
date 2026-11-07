'use client'

import { signup } from '@/app/lib/auth'
import { useActionState } from 'react'

export default function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined)

    return (
        <form action={action} className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength={8}
                    className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {state?.message && <p role="alert">{state.message}</p>}

            <button type="submit" disabled={pending}>
                {pending ? 'Signing up...' : 'Sign up'}
            </button>
        </form>
    )
}
