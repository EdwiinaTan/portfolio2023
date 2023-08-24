import { Box, Divider } from "@mui/material"
import { useNavigate } from "react-router"
import { Link as LinkDom } from "react-router-dom"
import logo from "../../../public/assets/logo.jpg"
import { Link, LinkTarget } from "../Link"
import { useStyles } from "./Styles"

export const Menu = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <nav className={classes.container}>
      <div className={classes.block}>
        <LinkDom to="">
          <img src={logo} width={100} height={50} alt="Logo portfolio Edwina" />
        </LinkDom>
        <Link router="about" text="About me" />
        <Link router="cv" text="CV" />
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.block}>
        <span className={classes.title}>RESOURCES</span>
        <Link router="tech" text="Tech" />
        <Link router="design" text="Design" />
        <Box sx={{ p: 1 }}></Box>
        <span className={classes.title}>SKETCH</span>
        <Link router="peint" text="Peint" />
        <Link router="draw" text="Draw" />
        <Box sx={{ p: 1 }}></Box>
        <span className={classes.title}>ETSY</span>
        <Link router="shop" text="Shop" />
        <Link router="inspo" text="Inspo" />
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.block}>
        <span className={classes.title}>CONTACT</span>
        <LinkTarget link="mailto:edwina.tan77@gmail.com" text="Mail" noBlank />
        <LinkTarget link="https://github.com/EdwiinaTan" text="Github" />
        <LinkTarget
          link="https://www.linkedin.com/in/edwina-tan-977bb5159/"
          text="LinkedIn"
        />
        <li onClick={() => navigate("/cv")}>EdwiiStudio</li>
      </div>
    </nav>
  )
}