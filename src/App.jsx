
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home';
import Welcome_Page from './Welcome_Page';

import ProtectedRoutes from './ProtectedRoutes';

function App() {
return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path="/Welcome_Page" element={<Welcome_Page/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
);
}

export default App;
