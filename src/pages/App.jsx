import axios from 'axios';
import Home from './Home';
import Header from '../components/Header';

const url = 'https://restcountries.com/v3.1/all';

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
export default App;
