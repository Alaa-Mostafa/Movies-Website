import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import MoviesModule from './modules/MoviesModule';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <BrowserRouter>

          <Navbar></Navbar>

            <Routes>
              <Route path="/movies/*" element={<MoviesModule></MoviesModule>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>

        </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;