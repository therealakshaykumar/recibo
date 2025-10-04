import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedLayout from "./components/ProtectedLayout";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path='*' element={<Navigate to={'/'} replace />} />
        </Routes>
      </Router>
      <Toaster toastOptions={{
        style:{
          fontSize: '13px'
        }
      }} />
    </div>
  );
};

export default App;
