import './App.css';
import './styles/changeMood.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import { useSelector } from 'react-redux';

function App() {

  const mood = useSelector(state=>state.mood)

  return (
    <HashRouter>
      <div className={mood? 'App nigth-mood' : 'App day-mood' }>
        <Nav />
          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
