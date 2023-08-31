import { Box, Grid } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Body2, Body4, SubBody } from "src/components/Typo"
import { useStyles } from "../Styles"
import intro from "/assets/animeaux/intro.png"

export const Presentation = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <>
      <SubBody>{t("animeaux.presentation")}</SubBody>
      <Body2>{t("animeaux.what")}</Body2>
      <div style={{ display: "flex", gap: 32 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ p: 1 }}></Box>
          <img
            src={intro}
            alt="Animeaux animal association"
            width="250"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ p: 2 }}></Box>
          <Body4>{t("animeaux.presPara1")}</Body4>
          <Box sx={{ p: 1 }}></Box>
          <Body4>{t("animeaux.presPara2")}</Body4>
          <Box sx={{ p: 1 }}></Box>
          <Body4>{t("animeaux.presPara3")}</Body4>
          <Box sx={{ p: 2 }}></Box>
        </div>
      </div>
      <Box sx={{ p: 3 }}></Box>
      <Body2>{t("animeaux.problem")}</Body2>
      <Box sx={{ p: 1 }}></Box>
      <Body4>{t("animeaux.problem1")}</Body4>
      <Box sx={{ p: 1 }}></Box>
      <Body4>{t("animeaux.problem2")}</Body4>
      <Box sx={{ p: 1 }}></Box>
      <Body4>{t("animeaux.problem3")}</Body4>
      <Box sx={{ p: 3 }}></Box>
      <Body2>{t("animeaux.goal")}</Body2>
      <Box sx={{ p: 1 }}></Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.goal1")}</Body4>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.goal2")}</Body4>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.goal3")}</Body4>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.goal4")}</Body4>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
