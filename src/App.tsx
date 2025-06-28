import './styles/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
