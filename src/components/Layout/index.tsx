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
