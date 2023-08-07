import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';
import { Toaster } from 'react-hot-toast';
import bg from './Assets/web-bg.jpg'

function App() {
  return (
    <div className="mx-auto bg-no-repeat">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
