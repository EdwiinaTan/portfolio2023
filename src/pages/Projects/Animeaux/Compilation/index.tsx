import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LinkProject } from "src/components/Link"
import { Body4, SubBody } from "src/components/Typo"
import { theme } from "src/theme"

export const Compilation = () => {
  const { t } = useTranslation()

  return (
    <>
      <SubBody>{t("animeaux.compilation")}</SubBody>
      <Box sx={{ p: 0.1 }}></Box>
      <LinkProject
        link="https://www.la-spa.fr/"
        text="SPA"
        color={theme.palette.common.black}
      />
      <Body4>{t("animeaux.benchmark1")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <LinkProject
        link="https://www.30millionsdamis.fr/"
        text="La fondation 30 Millions d'Amis"
        color={theme.palette.common.black}
      />
      <Body4>{t("animeaux.benchmark2")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <LinkProject
        link="https://www.30millionsdamis.fr/"
        text="L'association Owca"
        color={theme.palette.common.black}
      />
      <Body4>{t("animeaux.benchmark3")}</Body4>
    </>
  )
}
