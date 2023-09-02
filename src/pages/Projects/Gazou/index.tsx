import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkProject } from "src/components/Link"
import { Body2, Body3, Body4, SubBody } from "src/components/Typo"
import { theme } from "src/theme"
import banner from "/assets/gazou/banner.svg"

export const Gazou = () => {
  const { t } = useTranslation()

  return (
    <article>
      <LinkDom to="https://www.animeaux.org/" target="_blank" rel="noopener">
        <img
          src={banner}
          alt="Gazou banner from dribbble"
          width="100%"
          height="100%"
        />
      </LinkDom>
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>03 | Gazou</Body2>
        <Body3>{t("gazou.gas_stations")}</Body3>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 1 }}></Box>
        <Body4>{t("gazou.intro")}</Body4>
        <Box sx={{ p: 1 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Stack</Body3>
            <Body4>React Native</Body4>
            <Body4>Google Places Autocomplete</Body4>
            <Body4>Maps</Body4>
            <Body4>React Native Paper</Body4>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Team</Body3>
            <Body4>2 Developers</Body4>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Project</Body3>
            <LinkProject
              link="https://gitlab.com/Yutsu/gazou"
              text="Repository"
            />
            <Box sx={{ p: 0.01 }}></Box>
            <LinkProject
              link="https://www.canva.com/design/DAFtTnCDbFU/Cyfz8Mo_r8tLDZO-MC3e1A/edit?utm_content=DAFtTnCDbFU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              text="Presentation"
            />
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Timeline</Body3>
            <Body4>November 2022</Body4>
          </div>
        </section>
        <Box sx={{ p: 2 }}></Box>
        <Divider />
        <Box sx={{ p: 2 }}></Box>
        <SubBody>{t("animeaux.presentation")}</SubBody>
        <Box sx={{ p: 1 }}></Box>
      </div>
    </article>
  )
}
