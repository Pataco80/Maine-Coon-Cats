import React from "react"
import { Link } from "gatsby"
import { Menu, Icon } from "antd"

class MainNavigation extends React.Component {

  render() {
    return (
      < Menu theme="light" mode="inline" defaultSelectedKeys={this.props.page} >
        <Menu.Item key="1">
          <Link className="sider-menu-link" to="/">
            <Icon type="home" />
            <span className="nav-text">Accueil</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link className="sider-menu-link" to="/blog/">
            <Icon type="book" />
            <span className="nav-text">Blog</span>
          </Link>

        </Menu.Item>
        <Menu.Item key="3">
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

