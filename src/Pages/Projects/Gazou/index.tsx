import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as LinkDom } from "react-router-dom"
import { LinkTarget } from "src/components/Link"
import { Body2, Body3, Body4, Title2 } from "src/components/Typo"
import { theme } from "src/theme"
import banner from "/assets/gazou/banner.svg"

export const Gazou = () => {
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
      <Box sx={{ p: 2 }}></Box>
      <div style={{ width: "70%", margin: "auto" }}>
        <Body2 style={{ color: theme.palette.grey[600] }}>03 | Gazou</Body2>
        <Body3>{t("gazou.looking_gas")}</Body3>
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
            <Body4>Google Places Autocomplete</Body4>
            <Body4>Maps</Body4>
            <Body4>React Native Paper</Body4>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Team</Body3>
            <Body4>2 developers</Body4>
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Repository</Body3>
            <LinkTarget link="https://gitlab.com/Yutsu/gazou" text="Gazou" />
          </div>
          <div>
            <Body3 style={{ color: "#1D1D1F" }}>Timeline</Body3>
            <Body4>November 2022</Body4>
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
