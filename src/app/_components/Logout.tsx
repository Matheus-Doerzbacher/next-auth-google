import { doLogout } from '../actions'

export const Logout = () => {
  return (
    <form action={doLogout}>
      <button
        type="submit"
        className="flex gap-3 items-center border border-neutral-50 p-3 rounded-md hover:bg-white/10 transition-colors"
      >
        Logout
      </button>
    </form>
  )
}
