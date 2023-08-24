import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../components/Layout"
import { About } from "../pages/About"
import { Cv } from "../pages/Cv"
import { Home } from "../pages/Home"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cv",
        element: <Cv />,
      },
      {
        path: "/tech",
        element: <Cv />,
      },
      {
        path: "/design",
        element: <Cv />,
      },
      {
        path: "/peint",
        element: <Cv />,
      },
      {
        path: "/draw",
        element: <Cv />,
      },
      {
        path: "/shop",
        element: <Cv />,
      },
      {
        path: "/inspo",
        element: <Cv />,
      },
    ],
  },
])
