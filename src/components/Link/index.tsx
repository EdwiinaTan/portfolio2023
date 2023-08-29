import { Link as LinkMui } from "@mui/material"
import { useNavigate } from "react-router"
import { theme } from "src/theme"
import { LinkProps } from "./Type"

export const Link: React.FC<LinkProps> = ({ router, text }) => {
  const navigate = useNavigate()

  return (
    <LinkMui
      component="button"
      underline="none"
      color="black"
      onClick={() => navigate(`/${router}`)}
      style={{ letterSpacing: 0.5 }}
    >
      {text}
    </LinkMui>
  )
}

export const LinkTarget: React.FC<LinkProps> = ({
  link,
  text,
  noBlank,
  color = "black",
}) => {
  return (
    <LinkMui
      href={link}
      target={noBlank ? "" : "_blank"}
      underline="hover"
      rel="noopener"
      color={color}
      style={{ letterSpacing: 0.5 }}
    >
      {text}
    </LinkMui>
  )
}

export const LinkProject: React.FC<LinkProps> = ({ link, text }) => {
  return (
    <LinkMui
      href={link}
      target={"_blank"}
      underline="hover"
      rel="noopener"
      color={theme.palette.grey[700]}
      style={{ fontSize: 14 }}
    >
      {text}
    </LinkMui>
  )
}
