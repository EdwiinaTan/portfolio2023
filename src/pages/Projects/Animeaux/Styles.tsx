import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles<Theme>(() => ({
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    height: "100%",
  },
}))
