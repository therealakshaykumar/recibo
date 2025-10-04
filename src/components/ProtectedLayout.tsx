import ProtectedRoute from './ProtectedRoute'
import { Outlet } from 'react-router-dom'

const ProtectedLayout = () => {
  return (
    <ProtectedRoute>
        <Outlet />
    </ProtectedRoute>
  )
}

export default ProtectedLayout