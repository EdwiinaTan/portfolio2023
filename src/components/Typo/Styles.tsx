import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles((theme: Theme) => ({
  title1: {
    fontSize: 48,
    lineHeight: "28px",
    fontWeight: "600",
    margin: 0,
  },
  title2: {
    fontSize: 40,
    lineHeight: "44px",
    fontWeight: "500",
    color: theme.palette.grey[600],
    margin: 0,
  },
  title3: {
    fontSize: 24,
    lineHeight: "20px",
    fontWeight: "500",
    margin: 0,
  },
  body1: {
    fontSize: 32,
    lineHeight: "24px",
    fontWeight: "600",
    margin: 0,
  },
  body2: {
    fontSize: 24,
    lineHeight: "24px",
    fontWeight: "300",
    color: theme.palette.grey[700],
    margin: 0,
  },
  body3: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: "100",
    color: theme.palette.grey[500],
    margin: 0,
  },
  body4: {
    fontSize: 14,
    lineHeight: "24px",
    fontWeight: "100",
    color: theme.palette.grey[700],
    margin: 0,
    padding: 0,
  },
  subbody: {
    letterSpacing: 1,
    fontSize: 12,
    color: theme.palette.grey[500],
    textTransform: "uppercase",
  },
}))
