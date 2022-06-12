import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Header from './component/Header';
import SearchPage from './pages/SearchPage';
import ShowMediaPage from './pages/ShowMediaPage';

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/*" element={<ShowMediaPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
