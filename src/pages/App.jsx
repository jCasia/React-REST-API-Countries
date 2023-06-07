import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import HomeLayout from './HomeLayout';
import Error from './Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />, //shared layout
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'details',
        element: <Details />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
