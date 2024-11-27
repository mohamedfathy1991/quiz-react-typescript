import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
   const routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />, 
      children: [
        {
          index: true, 
          path: '/',
          element: <Home />,
        },
        {
          path: 'about',
          element: <div>ASD</div>
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} >
 
      
      </RouterProvider>

  );
}

export default App;
