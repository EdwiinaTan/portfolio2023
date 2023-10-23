import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { t } from "i18next"
import { Link } from "react-router-dom"
import { theme } from "src/theme"
import { useStyles } from "./Styles"

interface CardTechProps {
  image?: string
  title: string
  subtitle: string
  link: string
}

export const CardTech: React.FC<CardTechProps> = ({
  image,
  title,
  subtitle,
  link,
}) => {
  const classes = useStyles()

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: "none!important",
        border: `1px solid ${theme.palette.grey[300]}`,
        width: "fit-content!important",
      }}
    >
      <CardContent style={{ padding: "0px!important" }}>
        <Link to={link} target="_blank" rel="noopener">
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt={`${title}_${link}`}
            style={{
              objectFit: "contain",
            }}
            className={classes.media}
          />
        </Link>
        <Box sx={{ p: 1 }}></Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2">{t(`tech.${subtitle}`)}</Typography>
        )}
      </CardContent>
    </Card>
  )
}
