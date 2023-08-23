import { Button } from "@mui/material"
import { useNavigate } from "react-router"
import { useStyles } from "./Styles"

export const Menu = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/about")}>About</Button>
    </div>
  )
}
