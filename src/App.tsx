import './styles/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Homepage/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
