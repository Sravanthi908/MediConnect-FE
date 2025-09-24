import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from './ui'

const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Mediconnect</Link>
        <nav>
          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <div className="space-x-4">
              <Link to="/login" className="text-blue-600">Login</Link>
              <Link to="/register" className="text-blue-600">Register</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header