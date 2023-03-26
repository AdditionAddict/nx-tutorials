import { Link, Outlet } from 'react-router-dom'

export default function MessageBoard() {
  return (
    <div className="
      grid gap-4 auto-rows-auto justify-center min-w-screen mt-4
    ">
      <Link to="/1" className="flex grow">
        <h2 className="
          uppercase text-white text-3xl
        ">Message Board</h2>
      </Link>
      <Outlet />
    </div>
  )
}