import { Outlet, createBrowserRouter } from "react-router-dom"
import { Menu } from "../components/Menu"
import { About } from "../pages/About"
import { Home } from "../pages/Home"

// eslint-disable-next-line react-refresh/only-export-components
const AppLayout = () => (
  <div style={{ display: "flex" }}>
    <Menu />
    <Outlet />
  </div>
)

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
])
