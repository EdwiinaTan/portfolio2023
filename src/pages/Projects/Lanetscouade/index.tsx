import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkProject } from "src/components/Link"
import { Body2, Body3, Body4, SubBody } from "src/components/Typo"
import { theme } from "src/theme"
import { useStyles } from "../Styles"
import construction from "/assets/construction.svg"
import banner from "/assets/lanetscouade/banner.png"

export const Lanetscouade = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <article>
      <LinkDom to="https://lanetscouade.com/" target="_blank" rel="noopener">
        <img
          src={banner}
          alt="Lanetscouade banner cnes perseverance project"
          width="100%"
          height="100%"
        />
      </LinkDom>
      <Body4 style={{ fontSize: 12 }}>{t("lanet.info_image")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>
          02 | La Netsouade
        </Body2>
        <Body3>{t("lanet.digital_agency")}</Body3>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("lanet.intro")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <section className={classes.section}>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("stack")}
            </Body3>
            <Body4>NextJS</Body4>
            <Body4>Tailwind</Body4>
            <Body4>Mantine</Body4>
          </div>
          <div>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("tools")}
            </Body3>
            <Body4>Figma</Body4>
            <Body4>Vercel</Body4>
          </div>
          <div className={classes.title}>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("team")}
            </Body3>
            <Body4>2 {t("developers")}</Body4>
            <Body4>1 UX/UI designer</Body4>
            <Body4>2 {t("web_designer")}</Body4>
          </div>
          <div className={classes.title}>
            <Body3 style={{ color: theme.palette.common.black }}>
              {t("project")}
            </Body3>
            <LinkProject
              link="https://lanetscouade.vercel.app/"
              text={t("website")}
            />
            <LinkProject
              link="https://gitlab.com/EliottR/lanetscouade"
              text={t("repository")}
            />
            <LinkProject
              link="https://www.figma.com/file/3XqrUk4JhTMppURemL8dCt/Comp%C3%A9tition-M2?type=design&node-id=126%3A3272&mode=design&t=niL19jLd4JTNVrjT-1"
              text={t("presentation")}
            />
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>{t("timeline")}</Body3>
            <Body4>{t("lanet.date_project")}</Body4>
          </div>
        </section>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <SubBody>{t("animeaux.presentation")}</SubBody>
        <img src={construction} alt="Under construction" width="100%" />
      </div>
    </article>
  )
}
