import { Box, Grid } from "@mui/material"
import { useTranslation } from "react-i18next"
import { LinkProject } from "src/components/Link"
import { Body4, SubBody } from "src/components/Typo"
import { theme } from "src/theme"
import { useStyles } from "../Styles"

export const Tech = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <>
      <SubBody>{t("animeaux.tech_spe")}</SubBody>
      <Box sx={{ p: 0.1 }}></Box>
      <LinkProject
        link="https://reactnative.dev/"
        text="React Native"
        color={theme.palette.common.black}
      />
      <Box sx={{ p: 0.5 }}></Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.tech_react1")}</Body4>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.tech_react2")}</Body4>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.tech_react3")}</Body4>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.item}>
            <Body4>{t("animeaux.tech_react4")}</Body4>
          </div>
        </Grid>
      </Grid>
      <Box sx={{ p: 2 }}></Box>
      <LinkProject
        link="https://expo.dev/"
        text="Expo"
        color={theme.palette.common.black}
      />
      <Box sx={{ p: 0.5 }}></Box>
      <Body4>{t("animeaux.tech_expo1")}</Body4>
      <Box sx={{ p: 1 }}></Box>
      <Body4>{t("animeaux.tech_expo2")}</Body4>
      <Box sx={{ p: 1 }}></Box>
      <Body4>{t("animeaux.tech_expo3")}</Body4>
      <Box sx={{ p: 1 }}></Box>
      <Body4>{t("animeaux.tech_expo4")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <LinkProject
        link="https://airtable.com/"
        text="Airtable"
        color={theme.palette.common.black}
      />
      <Box sx={{ p: 0.5 }}></Box>
      <Body4>{t("animeaux.tech_airtable")}</Body4>
      <Box sx={{ p: 2 }}></Box>
      <LinkProject
        link="https://aws.amazon.com/fr/s3/"
        text="AWS - Bucket S3"
        color={theme.palette.common.black}
      />
      <Box sx={{ p: 0.5 }}></Box>
      <Body4>{t("animeaux.tech_aws")}</Body4>
    </>
  )
}
