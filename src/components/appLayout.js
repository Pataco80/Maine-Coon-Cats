import React from "react"
import { Link } from "gatsby"

import MainNavigation from "./mainNavigation"
import FooterSite from "./footer"
import { Layout } from "antd"
import "./layout.css"


const {
  Header, Footer, Sider, Content,
} = Layout;

class AppLayout extends React.Component {

  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { location, title, children, page } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>
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
          <Header>{header}</Header>
          <Layout>
            <Sider
              theme="light"
              breakpoint="md"
              collapsedWidth="0"
              onBreakpoint={(broken) => { console.log(broken); }}
              onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
              <div className="logo" />
              <MainNavigation />
            </Sider>
            <Content>{children}</Content>
          </Layout>
          <Footer>
            <FooterSite />
          </Footer>
        </Layout>
      </div >
    )
  }
}

export default AppLayout
