import React from "react"
import { Menu, Icon } from "antd"

class MainNavigation extends React.Component {
  render() {
    return (
      < Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >
        <Menu.Item key="1">
          <Icon type="home" />
          <span className="nav-text">Accueil</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="book" />
          <span className="nav-text">Blog</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="mail" />
          <span className="nav-text">Contact</span>
        </Menu.Item>
      </Menu >
    )
  }
}

export default MainNavigation

