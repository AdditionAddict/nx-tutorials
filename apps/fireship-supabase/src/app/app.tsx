// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import MessageBoard from './message-board';
import Welcome from './welcome';
import AllPosts from './all-posts';
import PostView from './post-view';
import Navbar from './navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ':pageNumber',
            element: <AllPosts />
          },
          {
            path: 'post/:id',
            element: <PostView />
          }
        ]
      },
      {
        path: 'welcome',
        element: <Welcome />
      }
    ]
  }
])


export function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

