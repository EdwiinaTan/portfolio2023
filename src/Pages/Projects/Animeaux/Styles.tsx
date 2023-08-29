import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  title: {
    letterSpacing: 1,
    fontSize: 12,
    color: theme.palette.grey[500],
    textTransform: "uppercase",
  },
  item: {
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: 8,
    borderRadius: 8,
  },
}))
