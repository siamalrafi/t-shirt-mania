import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from '../src/Components/Home/Home';
import Orders from '../src/Components/Orders/Orders';
import About from '../src/Components/About/About';
import GrandPa from './Components/GrandPa/GrandPa';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:()=>fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: 'home',
          loader:()=>fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: 'orders',
          element: <Orders></Orders>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'grandPa',
          element: <GrandPa></GrandPa>
        },
      ]
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
