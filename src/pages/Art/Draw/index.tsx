import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, Title2 } from "src/components/Typo"
import { theme } from "src/theme"
import draw1 from "/assets/art/draw/draw1.png"
import draw2 from "/assets/art/draw/draw2.png"
import draw3 from "/assets/art/draw/draw3.png"
import draw4 from "/assets/art/draw/draw4.png"
import draw5 from "/assets/art/draw/draw5.png"
import draw6 from "/assets/art/draw/draw6.png"
import draw7 from "/assets/art/draw/draw7.png"

export const Draw = () => {
  const { t } = useTranslation()

  return (
    <div style={{ backgroundColor: theme.palette.primary.main }}>
      <LayoutPage noPadding={false}>
        <Body3 style={{ color: theme.palette.common.white }}>Draw ✎</Body3>
        <Box sx={{ p: 2 }} />
        <Title2 style={{ color: theme.palette.common.white }}>
          {t("draw.intro")}
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
            src={draw1}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={draw3}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={draw2}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={draw4}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={draw5}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={draw7}
            alt="Animeaux animal association"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
          <img
            src={draw6}
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
