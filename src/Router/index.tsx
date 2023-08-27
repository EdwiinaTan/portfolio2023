import { createBrowserRouter } from "react-router-dom"
import { Layout } from "src/components/Layout"
import { About } from "src/pages/About"
import { Cv } from "src/pages/Cv"
import { Home } from "src/pages/Home"
import { Animeaux } from "src/pages/Projects/Animeaux"
import { Gazou } from "src/pages/Projects/Gazou"
import { Lanetscouade } from "src/pages/Projects/Lanetscouade"
import { Rick } from "src/pages/Projects/Rick"
import { Design } from "src/pages/Resources/Design"
import { Tech } from "src/pages/Resources/Tech"

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
        element: <Tech />,
      },
      {
        path: "/design",
        element: <Design />,
      },
      {
        path: "/paint",
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
      {
        path: "/animeaux",
        element: <Animeaux />,
      },
      {
        path: "/lanetscouade",
        element: <Lanetscouade />,
      },
      {
        path: "/rick",
        element: <Rick />,
      },
      {
        path: "/gazou",
        element: <Gazou />,
      },
    ],
  },
])
