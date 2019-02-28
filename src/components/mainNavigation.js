import React from "react"
import { Link } from "gatsby"
import { Menu, Icon } from "antd"

class MainNavigation extends React.Component {
  render() {

    return (
      < Menu theme="light" mode="inline" defaultSelectedKeys={['home']} >
        <Menu.Item key="home">
          <Link className="sider-menu-link" to="/">
            <Icon type="home" />
            <span className="nav-text">Accueil</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link className="sider-menu-link" to="/blog/">
            <Icon type="book" />
            <span className="nav-text">Blog</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="contact">
          <Link className="sider-menu-link" to="/contact/">
            <Icon type="mail" />
            <span className="nav-text">Contact</span>
          </Link>
        </Menu.Item>

      </Menu >
    )
  }
}

export default MainNavigation

