import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Header from '../components/Header';
import Details from './Details';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </Router>
  );
}
export default App;
