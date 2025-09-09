import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import "./styles/globalStyle.css"

function App() {
  return (
    <>
      <div className="user-card">
        <Profile />
        <Login />
      </div>
    </>
  )
}

export default App;
