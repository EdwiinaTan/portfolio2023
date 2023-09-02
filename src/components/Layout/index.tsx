import { Box } from "@mui/material"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { Menu } from "../Menu"
import { useStyles } from "./Styles"
import { LayoutProps } from "./Type"

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
      </div>
    </div>
  )
}

export const LayoutPage: React.FC<LayoutProps> = ({
  children,
  noPadding = true,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.containerPage}>
      <Box sx={{ p: 2 }}></Box>
      {children}
      {noPadding && <Box sx={{ p: 2 }}></Box>}
    </div>
  )
}
