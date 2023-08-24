import { Outlet } from "react-router"
import { Menu } from "../Menu"

export const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
      }}
    >
      <Menu />
      <div style={{ marginLeft: 170, paddingLeft: 56, paddingRight: 56 }}>
        <Outlet />
      </div>
    </div>
  )
}
