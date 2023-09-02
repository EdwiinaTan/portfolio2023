import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, Title2 } from "src/components/Typo"
import { theme } from "src/theme"
import { Image } from "./Image"
import draw1 from "/assets/art/draw/draw1.png"
import draw10 from "/assets/art/draw/draw10.png"
import draw11 from "/assets/art/draw/draw11.png"
import draw12 from "/assets/art/draw/draw12.png"
import draw13 from "/assets/art/draw/draw13.png"
import draw14 from "/assets/art/draw/draw14.png"
import draw15 from "/assets/art/draw/draw15.png"
import draw16 from "/assets/art/draw/draw16.png"
import draw2 from "/assets/art/draw/draw2.png"
import draw3 from "/assets/art/draw/draw3.png"
import draw4 from "/assets/art/draw/draw4.png"
import draw5 from "/assets/art/draw/draw5.png"
import draw6 from "/assets/art/draw/draw6.png"
import draw7 from "/assets/art/draw/draw7.png"
import draw8 from "/assets/art/draw/draw8.png"
import draw9 from "/assets/art/draw/draw9.png"

export const Draw = () => {
  const { t } = useTranslation()
  const drawArray = [
    draw1,
    draw3,
    draw2,
    draw4,
    draw7,
    draw8,
    draw9,
    draw5,
    draw6,
    draw11,
    draw12,
    draw10,
    draw14,
    draw13,
    draw15,
    draw16,
  ]

  const renderImg = () => {
    return drawArray.map((draw) => {
      return <Image draw={draw} />
    })
  }

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
          {renderImg()}
        </div>
      </LayoutPage>
      <Box sx={{ p: 2 }} />
    </div>
  )
}
