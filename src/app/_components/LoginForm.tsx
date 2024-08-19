import Image from 'next/image'
import { doSocialLogin } from '../actions'

export const LoginForm = () => {
  return (
    <div>
      <form action={doSocialLogin} className="flex gap-5">
        <button
          type="submit"
          name="action"
          value="google"
          className="flex gap-3 items-center border border-neutral-50 p-3 rounded-md hover:bg-white/10 transition-colors"
        >
          <Image src="/google.png" alt="logo" width={25} height={25} />
          Login com o Google
        </button>
        <button
          type="submit"
          name="action"
          value="github"
          className="flex gap-3 items-center border border-neutral-50 p-3 rounded-md hover:bg-white/10 transition-colors"
        >
          <Image
            src="/github.png"
            alt="logo"
            width={30}
            height={30}
            className="invert"
          />
          Login com o GitHub
        </button>
      </form>
    </div>
  )
}
