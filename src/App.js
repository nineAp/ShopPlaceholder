import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <AppRouter></AppRouter>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
