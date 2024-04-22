
import { Home } from './pages/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Learn } from './pages/Learn';
import Layout from './Layout';
function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/learn" element={<Learn />} />   
      </Route>
    )
  )

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />

    </div>
  );
}

export default App
