import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function AdminPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  console.log(data, error)
  if (error || !data?.user) {
    redirect('/login')
  }

  return <p>Hello Admin: {data.user.email}</p>
}