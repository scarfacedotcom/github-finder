import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
      </div>
    </Router>

    
  );
}

export default App;
