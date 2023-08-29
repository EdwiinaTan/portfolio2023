import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkProject } from "src/components/Link"
import { Body2, Body3, Body4, Title2 } from "src/components/Typo"
import { theme } from "src/theme"
import banner from "/assets/lanetscouade/banner.png"

export const Lanetscouade = () => {
  const { t } = useTranslation()

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
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Stack</Body3>
            <Body4>NextJS</Body4>
            <Body4>Tailwind</Body4>
            <Body4>Mantine</Body4>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Tools</Body3>
            <Body4>Figma</Body4>
            <Body4>Vercel</Body4>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Body3 style={{ color: "#1D1D1F" }}>Project</Body3>
            <LinkProject
              link="https://lanetscouade.vercel.app/"
              text="Website"
            />
            <LinkProject
              link="https://gitlab.com/EliottR/lanetscouade"
              text="Repository"
            />
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Timeline</Body3>
            <Body4>June 2023</Body4>
          </div>
        </section>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <Title2 style={{ textAlign: "center" }}>
          {t("animeaux.presentation")}
        </Title2>
        <Box sx={{ p: 1 }}></Box>
      </div>
    </article>
  )
}
