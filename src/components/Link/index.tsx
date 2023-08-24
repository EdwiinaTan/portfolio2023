import { Link as LinkMui } from "@mui/material"
import { useNavigate } from "react-router"
import { LinkProps } from "./Type"

export const Link: React.FC<LinkProps> = ({ router, text }) => {
  const navigate = useNavigate()

  return (
    <LinkMui
      component="button"
      underline="none"
      color="black"
      onClick={() => navigate(`/${router}`)}
    >
      {text}
    </LinkMui>
  )
}
