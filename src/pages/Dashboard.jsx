import { useAuth } from '../hooks/useAuth'
import { Card, Button } from '../components/ui'

const Dashboard = () => {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <p className="mt-2">Your token: {user?.token}</p>
        <Button onClick={logout} className="mt-6">Logout</Button>
      </Card>
    </div>
  )
}

export default Dashboard