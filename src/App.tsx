import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from '@/components/About/About';
import Home from '@/components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
