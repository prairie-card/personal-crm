import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersonalCRMHome } from './components/PersonalCRMHome';
import { InputUIComparison } from './components/InputUIComparison';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalCRMHome />} />
        <Route path="/mock-comparison" element={<InputUIComparison />} />
      </Routes>
    </Router>
  );
}

export default App;
