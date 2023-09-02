import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, Title2 } from "src/components/Typo"
import { theme } from "src/theme"
import paint1 from "/assets/art/paint/paint1.png"

export const Paint = () => {
  const { t } = useTranslation()

  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      <LayoutPage noPadding={false}>
        <Body3 style={{ color: theme.palette.common.white }}>Paint ⌑</Body3>
        <Box sx={{ p: 2 }} />
        <Title2 style={{ color: theme.palette.common.white }}>
          {t("paint.intro")}
        </Title2>
        <Box sx={{ p: 3 }} />
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <img
            src={paint1}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={paint1}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={paint1}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
        </div>
      </LayoutPage>
      <Box sx={{ p: 2 }} />
    </div>
  )
}
