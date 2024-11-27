import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        {
          index: true,  // المسار الرئيسي '/'
          element: <Home />,
        },
        {
          path: 'a',  // المسار الفرعي 'a'
          element: <h1>asdsds</h1>,
        },
        {
          path:"*",element:<h2>not found</h2>
        }
        
      ],
      
    },
    

  ]);

  return (
<RouterProvider router={routes} />

  );
}

export default App;
