import { auth } from '@/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Logout } from '../_components/Logout'

export default async function HomePage() {
  const session = await auth()

  if (!session?.user) redirect('/')

  return (
    <div className="flex flex-col items-center m-4 gap-4">
      <h1 className="text-3xl my-2">{session?.user?.name}</h1>
      <Image
        className="rounded-full"
        src={session?.user?.image ?? ''}
        alt="user"
        width={100}
        height={100}
      />
      <Logout />
    </div>
  )
}
