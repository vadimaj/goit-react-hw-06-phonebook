import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import SharedLayout from 'pages/SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
