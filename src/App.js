import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="mx-auto w-[1240px]">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
