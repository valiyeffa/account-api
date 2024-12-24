import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/sass/style.scss'
import { UserProvider } from './context/userContext.jsx'
import Routers from './Routers.jsx'

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <Routers />
    </UserProvider>
)
