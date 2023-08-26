import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkTarget } from "src/components/Link"
import { Body2, Body3, Body4 } from "src/components/Typo"
import { theme } from "src/theme"
import banner from "/assets/animeaux/banner2.png"

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
          style={{ borderRadius: 8 }}
        />
      </LinkDom>
      <Body4 style={{ fontSize: 12 }}>
        *Adopt! Find your dream partner and give him a second chance.
      </Body4>
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>01 | Animeaux</Body2>
        <Body3>{t("animeaux.help_volunteers")}</Body3>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 1 }}></Box>
        <Body4>
          During my last year at school, we had to develop a mobile project of
          our choice for our end-of-study project. I Designed and develop
          "Animeaux" application because a former colleague from Flatsy was a
          volunteer in this association she was facing various problems on
          mobile.
        </Body4>
        {/* <Body4>
          Lors de notre dernière année à l'école, nous avions pour obligation de
          développer un projet mobile au choix pour notre projet de fin d'étude.
          J'ai conçu et développé l'application "Animaux" car
          une ancienne collègue de chez Flatsy était bénévole dans cette
          association et elle faisait face à divers problèmes sur mobile.
        </Body4> */}
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
            <Body3 style={{ color: "#1D1D1F" }}>Repository</Body3>
            <LinkTarget
              link="https://github.com/EdwiinaTan/animeaux"
              text="Animeaux"
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
      </div>
    </article>
  )
}
