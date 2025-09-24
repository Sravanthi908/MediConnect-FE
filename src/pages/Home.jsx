import { Card } from '../components/ui'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Mediconnect</h1>
        <p>Please login or register to access your dashboard.</p>
      </Card>
    </div>
  )
}

export default Home