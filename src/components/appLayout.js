import React from "react"
import { Link } from "gatsby"
import MainNavigation from "./mainNavigation"
import { Layout, Icon } from "antd"
import "../theme/index"
import { rhythm, scale } from "../utils/typography"
import "./layout.css"


const {
  Header, Footer, Sider, Content,
} = Layout;

class AppLayout extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `1200px`,

        }}
      >
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <div className="logo" />
            <MainNavigation />
          </Sider>

          <Layout>
            <Header><Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />{header}</Header>
            <Content style={{ padding: `6rem 1rem 1rem 1rem` }}>{children}</Content>
            <Footer>
              © {new Date().getFullYear()}, Built with
          {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
          </Layout>

        </Layout>



      </div>
    )
  }
}

export default AppLayout
