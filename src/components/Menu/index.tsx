import { Box, Button, Divider } from "@mui/material"
import { t } from "i18next"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import logo from "../../../public/assets/logo.jpg"
import { Link, LinkTarget } from "../Link"
import { SubBody } from "../Typo"
import { useStyles } from "./Styles"

export const Menu = () => {
  const classes = useStyles()
  const { i18n } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleChangeLangueage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav className={classes.container}>
      <div className={classes.block}>
        <LinkDom to="" onClick={scrollToTop}>
          <img src={logo} width={100} height={50} alt="Logo portfolio Edwina" />
        </LinkDom>
        <Link router="about" text={t("menu.about")} />
        {/* <Link router="cv" text="CV" /> */}
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.block}>
        <SubBody>{t("menu.resources")}</SubBody>
        <Link router="tech" text="Tech" />
        <Link router="design" text="Design" />
        <Box sx={{ p: 1 }}></Box>
        <SubBody>Art</SubBody>
        <Link router="draw" text={t("menu.draw")} />
        <Link router="paint" text={t("menu.paint")} />
        <Box sx={{ p: 1 }}></Box>
      </div>
      <Divider variant="fullWidth" />
      <div className={classes.block}>
        <SubBody>Contact</SubBody>
        <LinkTarget link="mailto:edwina.tan77@gmail.com" text="Mail" noBlank />
        <LinkTarget link="https://github.com/EdwiinaTan" text="Github" />
        <LinkTarget
          link="https://www.linkedin.com/in/edwina-tan-977bb5159/"
          text="LinkedIn"
        />
        {/* <li onClick={() => navigate("/cv")}>EdwiiStudio</li> */}
      </div>
      <div style={{ display: "flex" }}>
        <Button onClick={() => handleChangeLangueage("fr")}>FR</Button>
        <Button onClick={() => handleChangeLangueage("en")}>EN</Button>{" "}
      </div>
    </nav>
  )
}
