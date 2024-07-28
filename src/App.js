import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';
import Layout from './Componets/Layout/Layout';
import People from './Componets/People/People';
import TV from './Componets/TV/TV';
import NotFound from './Componets/NotFound/NotFound';
const router= createBrowserRouter([
{path:'',element:<Layout/>,children:[
{path:'Movies/',element:<Home/>},
{path:'',element:<Home/>},
{path:'allmovies',element:<Home/>},
{path:'trendingmovies',element:<About/>},
{path:'trendinpeople',element:<People/>},
{path:'TV',element:<TV/>},
{path:'*',element:<NotFound/>}
]}
])
function App() {
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App;
