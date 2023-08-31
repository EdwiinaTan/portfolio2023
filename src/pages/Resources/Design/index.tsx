import { Box, Divider } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LayoutPage } from "src/components/Layout"
import { Body3, SubBody, Title2 } from "src/components/Typo"
import { renderTechCard } from "../Utils"
import { useStyles } from "./Styles"
import {
  designFontArray,
  designIconArray,
  designIllusArray,
  designLogoArray,
  designMockupArray,
} from "./Utils"

export const Design = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <LayoutPage>
      <Body3>Design ⌖</Body3>
      <Box sx={{ p: 2 }} />
      <Title2>{t("design.intro")}</Title2>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 1 }}></Box>
      <SubBody>{t("design.fonts")}</SubBody>
      <div className={classes.card}>{renderTechCard(designFontArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.icons")}</SubBody>
      <div className={classes.card}>{renderTechCard(designIconArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.illustrations")}</SubBody>
      <div className={classes.card}>{renderTechCard(designIllusArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.logo")}</SubBody>
      <div className={classes.card}>{renderTechCard(designLogoArray)}</div>
      <Box sx={{ p: 3 }}></Box>
      <SubBody>{t("design.mockups")}</SubBody>
      <div className={classes.card}>{renderTechCard(designMockupArray)}</div>
    </LayoutPage>
  )
}
