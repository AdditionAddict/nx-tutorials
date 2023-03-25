import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://supaship.io/supaship_logo_with_text.svg"
          alt="logo"
        />
      </Link>

      <ul>
        <li>
          <Link to="/1">
            message board
          </Link>
        </li>
      </ul>
    </nav>
  )
}