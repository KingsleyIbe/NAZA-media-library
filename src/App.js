import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Header from './component/Header';
import SearchPage from './pages/SearchPage';
import ShowMediaPage from './pages/ShowMediaPage';

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShowMediaPage />} />
        <Route path="/search-media" element={<SearchPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
