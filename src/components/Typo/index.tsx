import { useStyles } from "./Styles"

export interface TypoProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export const Title1: React.FC<TypoProps> = ({ children, style }) => {
  const classes = useStyles()

  return (
    <span className={classes.title1} style={style}>
      {children}
    </span>
  )
}

export const Title2: React.FC<TypoProps> = ({ children, style }) => {
  const classes = useStyles()
  return (
    <h1 className={classes.title2} style={style}>
      {children}
    </h1>
  )
}

export const Title3: React.FC<TypoProps> = ({ children, style }) => {
  const classes = useStyles()
  return (
    <h1 className={classes.title3} style={style}>
      {children}
    </h1>
  )
}

export const Body1: React.FC<TypoProps> = ({ children, style }) => {
  const classes = useStyles()
  return (
    <span className={classes.body1} style={style}>
      {children}
    </span>
  )
}

export const Body2: React.FC<TypoProps> = ({ children, style }) => {
  const classes = useStyles()
  return (
    <h1 className={classes.body2} style={style}>
      {children}
    </h1>
  )
}

export const Body3: React.FC<TypoProps> = ({ children, style }) => {
  const classes = useStyles()
  return (
    <h1 className={classes.body3} style={style}>
      {children}
    </h1>
  )
}

export const Body4: React.FC<TypoProps> = ({ children, style }) => {
  const classes = useStyles()
  return (
    <h1 className={classes.body4} style={style}>
      {children}
    </h1>
  )
}

export const SubBody: React.FC<TypoProps> = ({ children }) => {
  const classes = useStyles()
  return <span className={classes.subbody}>{children}</span>
}
