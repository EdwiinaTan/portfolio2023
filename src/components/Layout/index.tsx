import { Box } from "@mui/material"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { Menu } from "../Menu"
import { useStyles } from "./Styles"

export const Layout = () => {
  const classes = useStyles()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={classes.layout}>
      <Menu />
      <div className={classes.container}>
        <Outlet />
        <Box sx={{ p: 2 }}></Box>
      </div>
    </div>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.containerPage}>
      <Box sx={{ p: 2 }}></Box>
      {children}
    </div>
  )
}
