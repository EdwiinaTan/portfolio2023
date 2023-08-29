import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, Title2 } from "src/components/Typo"

export const Paint = () => {
  const { t } = useTranslation()

  return (
    <LayoutPage>
      <Body3>Paint ⌑</Body3>
      <Box sx={{ p: 2 }} />
      <Title2>{t("tech.intro")}</Title2>
    </LayoutPage>
  )
}
