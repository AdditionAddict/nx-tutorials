import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="
      flex justify-between items-center px-4 py-2 shadow-md
    ">
      <Link to="/" className="
        transition duration-300 ease-in-out transform hover:scale-110
      ">
        <img
          className="h-12"
          src="https://supaship.io/supaship_logo_with_text.svg"
          alt="logo"
        />
      </Link>

      <ul className="flex">
        <li className="
          bg-white bg-opacity-25 text-white px-4 py-2 rounded-md
          transition-all duration-300 ease-in-out hover:bg-opacity-50
        ">
          <Link to="/1">
            message board
          </Link>
        </li>
      </ul>
    </nav>
  )
}