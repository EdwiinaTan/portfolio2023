import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, Title2 } from "src/components/Typo"

export const Draw = () => {
  const { t } = useTranslation()

  return (
    <LayoutPage>
      <Body3>Draw ✎</Body3>
      <Box sx={{ p: 2 }} />
      <Title2>{t("design.intro")}</Title2>
    </LayoutPage>
  )
}
