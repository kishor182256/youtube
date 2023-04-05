import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './components/Main';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children: [{
      path:'/',
      element:<Main/>
    },{
      path:'watch',
      element:<WatchPage/>
    }],
}])

function App() {
  return (
    <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>

    </Provider>
  );
}

export default App;
