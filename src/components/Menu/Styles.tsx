import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  container: {
    position: "fixed",
    minWidth: 170,
    height: "100vh",
    top: 0,
    left: 0,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    padding: 0,
  },
  block: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "flex-start",
    width: "100%",
    padding: "16px 24px",
  },
  title: {
    letterSpacing: 1,
    fontSize: 12,
    color: theme.palette.grey[500],
    textTransform: "uppercase",
  },
}))
