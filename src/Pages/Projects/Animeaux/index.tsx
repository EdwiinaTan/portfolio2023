import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkTarget } from "src/components/Link"
import { Body2, Body3, Body4, SubBody, Title2 } from "src/components/Typo"
import { theme } from "src/theme"
import banner from "/assets/animeaux/banner2.png"
import intro from "/assets/animeaux/intro.png"

export const Animeaux = () => {
  const { t } = useTranslation()

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
            <LinkTarget
              link="https://github.com/EdwiinaTan/animeaux"
              text="Repository"
            />
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
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <Title2 style={{ textAlign: "center" }}>{t("animeaux.purpose")}</Title2>
        <Box sx={{ p: 1 }}></Box>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={intro} alt="Animeaux animal association" width="250" />
        </div>
        <Box sx={{ p: 2 }}></Box>
        <Body4>{t("animeaux.purpose1")}</Body4>
        <Box sx={{ p: 2 }}></Box>
      </div>
    </article>
  )
}
