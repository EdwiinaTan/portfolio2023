import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkTarget } from "src/components/Link"
import { Body2, Body3, Body4, SubBody } from "src/components/Typo"
import { theme } from "src/theme"
import { useStyles } from "../Styles"
import construction from "/assets/construction.svg"
import banner from "/assets/projects/rick/banner.svg"

export const Rick = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <article>
      <LinkDom to="https://lanetscouade.com/" target="_blank" rel="noopener">
        <img
          src={banner}
          alt="Rick & morty banner"
          width="100%"
          height="100%"
        />
      </LinkDom>
      <Body4 style={{ fontSize: 12 }}>{t("lanet.info_image")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>
          04 | Rick & Morty
        </Body2>
        <Body3>{t("lanet.digital_agency")}</Body3>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("rick.intro")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <section className={classes.section}>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("stack")}
            </Body3>
            <Body4>ReactJs</Body4>
            <Body4>Material UI</Body4>
            <Body4>Mantine</Body4>
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("tools")}
            </Body3>
            <Body4>Netlify</Body4>
          </div>
          <div className={classes.title}>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("project")}
            </Body3>
            <LinkTarget
              link="https://gitlab.com/Yutsu/gazou"
              text={t("repository")}
            />
            <LinkDom
              to="https://rick-and-morty-app-myjob.netlify.app/"
              target="_blank"
              rel="noopener"
            >
              {t("website")}
            </LinkDom>
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("timeline")}
            </Body3>
            <Body4>{t("rick.date_project")}</Body4>
          </div>
        </section>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <SubBody>{t("presentation")}</SubBody>
        <img src={construction} alt="Under construction" width="100%" />
      </div>
    </article>
  )
}
