import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { LayoutPage } from "src/components/Layout"
import { theme } from "src/theme"
import { useStyles } from "./Styles"
import anthony from "/assets/tech/anthony.png"
import pixelTrue from "/assets/tech/pixeltrue.png"

export const Tech = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <LayoutPage>
      <span>
        In this page, I link all the link that I found interesting. Je vais
        l'alimenter lorsque je trouverai des bons tuyaux. J'espère que cela va
        vous aider
      </span>
      <Box sx={{ p: 2 }}></Box>
      <Divider />
      <Box sx={{ p: 1 }}></Box>
      <span className={classes.title}>{t("tech.mockups")}</span>
      <div style={{ display: "flex", gap: 24 }}>
        <Card
          sx={{
            minWidth: 275,
            boxShadow: "none!important",
            border: `1px solid ${theme.palette.grey[300]}`,
          }}
        >
          <CardContent style={{ padding: "0px!important" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Pixeltrue
            </Typography>
            <Link
              to="https://mockups.pixeltrue.com/"
              target="_blank"
              rel="noopener"
            >
              <CardMedia
                component="img"
                height="194"
                image={pixelTrue}
                alt="Paella dish"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Box sx={{ p: 1 }}></Box>
            <Typography variant="body2">
              Free mockups with 4 devices with edit
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            boxShadow: "none!important",
            border: `1px solid ${theme.palette.grey[300]}`,
          }}
        >
          <CardContent style={{ padding: "0px!important" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Anthonyboyd
            </Typography>
            <Link
              to="https://www.anthonyboyd.graphics/mockups-collection/"
              target="_blank"
              rel="noopener"
            >
              <CardMedia
                component="img"
                height="194"
                image={anthony}
                alt="Paella dish"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Box sx={{ p: 1 }}></Box>
            <Typography variant="body2">
              Mockups with 7 types, just download it
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Box sx={{ p: 3 }}></Box>
      <span className={classes.title}>{t("tech.mockups")}</span>
    </LayoutPage>
  )
}
