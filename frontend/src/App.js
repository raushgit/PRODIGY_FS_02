import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EmployeeManagementApp from './components/EmployeemanagementApp';
import EmployeeDetails from './components/EmployeeDetails';
// This is the main App component that sets up the routing for the application
// It uses React Router to define the routes for the application
// The main route redirects to the employee management app
// The employee management app is displayed at the /employee route
// The employee details page is displayed at the /employee/:id route\
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="employee" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
