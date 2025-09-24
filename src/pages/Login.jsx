import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Button, Input, Label, Card, Alert } from '../components/ui'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const result = await login(formData)
    if (result.error) setError(result.error)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <Alert type="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </Card>
    </div>
  )
}

export default Login