import { Home } from './pages/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home searchVal={searchVal} />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/posts" element={<PostsList />}></Route>
          <Route path="/posts/:id" element={<PostEdit />}></Route> */}

        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
