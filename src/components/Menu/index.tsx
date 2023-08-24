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
      <Button onClick={() => navigate("/cv")}>Cv</Button>
      {/* IA website / design  */}
      <p>RESOURCES</p>
      <p>SKETCH</p>
      {/* peinture, sketch */}
      <h1>ETSY SHOP</h1>
      <h1>CONTACT</h1>
    </div>
  )
}
