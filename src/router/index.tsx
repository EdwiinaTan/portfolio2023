import { createBrowserRouter } from "react-router-dom"
import { Layout } from "src/components/Layout"
import { About } from "src/pages/About"
import { Draw } from "src/pages/Art/Draw"
import { Paint } from "src/pages/Art/Paint"
// import { Cv } from "src/pages/Cv"
import { Home } from "src/pages/Home"
import { Animeaux } from "src/pages/Projects/Animeaux"
import { Gazou } from "src/pages/Projects/Gazou"
import { Lanetscouade } from "src/pages/Projects/Lanetscouade"
import { Mooflix } from "src/pages/Projects/Mooflix"
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
      // {
      //   path: "/cv",
      //   element: <Cv />,
      // },
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
        element: <Paint />,
      },
      {
        path: "/draw",
        element: <Draw />,
      },
      // {
      //   path: "/shop",
      //   element: <Cv />,
      // },
      // {
      //   path: "/inspo",
      //   element: <Cv />,
      // },
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
      {
        path: "/mooflix",
        element: <Mooflix />,
      },
      {
        path: "/switchy",
        element: <Mooflix />,
      },
      {
        path: "/tastyworld",
        element: <Mooflix />,
      },
      {
        path: "/weather",
        element: <Mooflix />,
      },
    ],
  },
])
