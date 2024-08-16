import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './greetings.jsx'
import './index.css'
import FavoriteFood from './FavoriteFood.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
  </StrictMode>,
)