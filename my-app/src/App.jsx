import './App.css';

import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Upload from './views/Upload';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single" element={<Single />} />
          <Route path="/upload" element={<Upload />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
