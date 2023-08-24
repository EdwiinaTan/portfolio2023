import { Box, Divider } from "@mui/material"
import { useNavigate } from "react-router"
import { Link } from "../Link"
import { useStyles } from "./Styles"

export const Menu = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <nav className={classes.container}>
      <div className={classes.block}>
        <Link router="" text="Logo" />
        <Link router="about" text="About me" />
        <Link router="cv" text="CV" />
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.block}>
        <span className={classes.uppercase}>RESOURCES</span>
        <Link router="tech" text="Tech" />
        <Link router="design" text="Design" />
        <Box sx={{ p: 1 }}></Box>
        <span className={classes.uppercase}>SKETCH</span>
        <Link router="peint" text="Peint" />
        <Link router="draw" text="Draw" />
        <Box sx={{ p: 1 }}></Box>
        <span className={classes.uppercase}>ETSY</span>
        <Link router="shop" text="My shop" />
        <Link router="inspo" text="Inspo" />
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.block}>
        <span className={classes.uppercase}>CONTACT</span>
        <li onClick={() => navigate("/cv")}>Mail</li>
        <li onClick={() => navigate("/cv")}>GitHub</li>
        <li onClick={() => navigate("/cv")}>Linkedin</li>
        <li onClick={() => navigate("/cv")}>EdwiiStudio</li>
      </div>
    </nav>
  )
}
