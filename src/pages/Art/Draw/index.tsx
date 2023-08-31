import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, Title2 } from "src/components/Typo"
import { theme } from "src/theme"

export const Draw = () => {
  const { t } = useTranslation()

  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      <LayoutPage>
        <Body3 style={{ color: theme.palette.common.white }}>Draw ✎</Body3>
        <Box sx={{ p: 2 }} />
        <Title2 style={{ color: theme.palette.common.white }}>
          {t("draw.intro")}
        </Title2>
      </LayoutPage>
    </div>
  )
}
