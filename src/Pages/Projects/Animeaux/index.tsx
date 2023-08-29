import { Box, Divider, Grid, Link as LinkMui } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { Body2, Body3, Body4, SubBody } from "src/components/Typo"
import { theme } from "src/theme"
import { useStyles } from "./Styles"
import banner from "/assets/animeaux/banner2.png"
import intro from "/assets/animeaux/intro.png"

export const Animeaux = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <article>
      <LinkDom to="https://www.animeaux.org/" target="_blank" rel="noopener">
        <img
          src={banner}
          alt="Animeaux animal association"
          width="100%"
          height="100%"
        />
      </LinkDom>
      <Body4 style={{ fontSize: 12 }}>{t("animeaux.translation_image")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>01 | Animeaux</Body2>
        <Body3>{t("animeaux.help_volunteers")}</Body3>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("animeaux.intro")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Stack</Body3>
            <Body4>React Native</Body4>
            <Body4>React Query</Body4>
            <Body4>Material UI</Body4>
            <Body4>Aws-Sdk</Body4>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Tools</Body3>
            <Body4>Figma</Body4>
            <Body4>Airtable</Body4>
            <Body4>AWS - Bucket S3</Body4>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Project</Body3>
            <LinkMui
              href="https://github.com/EdwiinaTan/animeaux"
              target="_blank"
              underline="hover"
              rel="noopener"
              color={theme.palette.grey[700]}
              style={{ fontSize: 14 }}
            >
              Repository
            </LinkMui>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Timeline</Body3>
            <Body4>November 2022 - June 2023</Body4>
          </div>
        </section>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <SubBody>{t("animeaux.presentation")}</SubBody>
        <Body2>{t("animeaux.what")}</Body2>
        <div style={{ display: "flex", gap: 32 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ p: 1 }}></Box>
            <img
              src={intro}
              alt="Animeaux animal association"
              width="250"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ p: 2 }}></Box>
            <Body4>{t("animeaux.presPara1")}</Body4>
            <Box sx={{ p: 1 }}></Box>
            <Body4>{t("animeaux.presPara2")}</Body4>
            <Box sx={{ p: 1 }}></Box>
            <Body4>{t("animeaux.presPara3")}</Body4>
            <Box sx={{ p: 2 }}></Box>
          </div>
        </div>
        <Box sx={{ p: 1 }}></Box>
        <Body2>{t("animeaux.goal")}</Body2>
        <Box sx={{ p: 1 }}></Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6}>
            <div className={classes.item}>
              <Body4>{t("animeaux.goal1")}</Body4>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.item}>
              <Body4>{t("animeaux.goal2")}</Body4>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.item}>
              <Body4>{t("animeaux.goal3")}</Body4>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.item}>
              <Body4>{t("animeaux.goal4")}</Body4>
            </div>
          </Grid>
        </Grid>
        <Box sx={{ p: 2 }}></Box>
        <SubBody>{t("animeaux.benchmark")}</SubBody>
        <Box sx={{ p: 2 }}></Box>
      </div>
    </article>
  )
}
