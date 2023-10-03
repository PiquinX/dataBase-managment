import { UsersProvider } from './contexts/usersContext.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsersProvider>
      <App />
  </UsersProvider>
)
